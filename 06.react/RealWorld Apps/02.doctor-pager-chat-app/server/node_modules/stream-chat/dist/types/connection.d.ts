/// <reference types="node" />
/// <reference types="ws" />
import WebSocket from 'isomorphic-ws';
import { TokenManager } from './token_manager';
import { BaseDeviceFields, ConnectAPIResponse, ConnectionChangeEvent, ConnectionOpen, LiteralStringForUnion, Logger, UnknownType, UserResponse } from './types';
declare type Constructor<ChannelType extends UnknownType = UnknownType, CommandType extends string = LiteralStringForUnion, UserType extends UnknownType = UnknownType> = {
    apiKey: string;
    authType: 'anonymous' | 'jwt';
    clientID: string;
    eventCallback: (event: ConnectionChangeEvent) => void;
    logger: Logger | (() => void);
    messageCallback: (messageEvent: WebSocket.MessageEvent) => void;
    recoverCallback: (open?: ConnectionOpen<ChannelType, CommandType, UserType>) => Promise<void>;
    tokenManager: TokenManager<UserType>;
    user: UserResponse<UserType>;
    userAgent: string;
    userID: string;
    wsBaseURL: string;
    device?: BaseDeviceFields;
};
/**
 * StableWSConnection - A WS connection that reconnects upon failure.
 * - the browser will sometimes report that you're online or offline
 * - the WS connection can break and fail (there is a 30s health check)
 * - sometimes your WS connection will seem to work while the user is in fact offline
 * - to speed up online/offline detection you can use the window.addEventListener('offline');
 *
 * There are 4 ways in which a connection can become unhealthy:
 * - websocket.onerror is called
 * - websocket.onclose is called
 * - the health check fails and no event is received for ~40 seconds
 * - the browser indicates the connection is now offline
 *
 * There are 2 assumptions we make about the server:
 * - state can be recovered by querying the channel again
 * - if the servers fails to publish a message to the client, the WS connection is destroyed
 */
export declare class StableWSConnection<ChannelType extends UnknownType = UnknownType, CommandType extends string = LiteralStringForUnion, UserType extends UnknownType = UnknownType> {
    apiKey: Constructor<ChannelType, CommandType, UserType>['apiKey'];
    authType: Constructor<ChannelType, CommandType, UserType>['authType'];
    clientID: Constructor<ChannelType, CommandType, UserType>['clientID'];
    eventCallback: Constructor<ChannelType, CommandType, UserType>['eventCallback'];
    logger: Constructor<ChannelType, CommandType, UserType>['logger'];
    messageCallback: Constructor<ChannelType, CommandType, UserType>['messageCallback'];
    recoverCallback: Constructor<ChannelType, CommandType, UserType>['recoverCallback'];
    tokenManager: Constructor<ChannelType, CommandType, UserType>['tokenManager'];
    user: Constructor<ChannelType, CommandType, UserType>['user'];
    userAgent: Constructor<ChannelType, CommandType, UserType>['userAgent'];
    userID: Constructor<ChannelType, CommandType, UserType>['userID'];
    wsBaseURL: Constructor<ChannelType, CommandType, UserType>['wsBaseURL'];
    device: Constructor<ChannelType, CommandType, UserType>['device'];
    connectionID?: string;
    connectionOpen?: ConnectAPIResponse<ChannelType, CommandType, UserType>;
    consecutiveFailures: number;
    pingInterval: number;
    healthCheckTimeoutRef?: NodeJS.Timeout;
    isConnecting: boolean;
    isHealthy: boolean;
    isResolved?: boolean;
    lastEvent: Date | null;
    connectionCheckTimeout: number;
    connectionCheckTimeoutRef?: NodeJS.Timeout;
    rejectPromise?: (reason?: Error & {
        code?: string | number;
        isWSFailure?: boolean;
        StatusCode?: string | number;
    }) => void;
    resolvePromise?: (value: WebSocket.MessageEvent) => void;
    totalFailures: number;
    ws?: WebSocket;
    wsID: number;
    constructor({ apiKey, authType, clientID, eventCallback, logger, messageCallback, recoverCallback, tokenManager, user, userAgent, userID, wsBaseURL, device, }: Constructor<ChannelType, CommandType, UserType>);
    /**
     * connect - Connect to the WS URL
     *
     * @return {ConnectAPIResponse<ChannelType, CommandType, UserType>} Promise that completes once the first health check message is received
     */
    connect(): Promise<void | ConnectionOpen<ChannelType, CommandType, UserType>>;
    /**
     * _waitForHealthy polls the promise connection to see if its resolved until it times out
     * the default 15s timeout allows between 2~3 tries
     * @param timeout duration(ms)
     */
    _waitForHealthy(timeout?: number): Promise<void | ConnectionOpen<ChannelType, CommandType, UserType>>;
    _buildUrl: () => string;
    /**
     * disconnect - Disconnect the connection and doesn't recover...
     *
     */
    disconnect(timeout?: number): Promise<void>;
    /**
     * _connect - Connect to the WS endpoint
     *
     * @return {ConnectAPIResponse<ChannelType, CommandType, UserType>} Promise that completes once the first health check message is received
     */
    _connect(): Promise<ConnectionOpen<ChannelType, CommandType, UserType> | undefined>;
    /**
     * _reconnect - Retry the connection to WS endpoint
     *
     * @param {{ interval?: number; refreshToken?: boolean }} options Following options are available
     *
     * - `interval`	{int}			number of ms that function should wait before reconnecting
     * - `refreshToken` {boolean}	reload/refresh user token be refreshed before attempting reconnection.
     */
    _reconnect(options?: {
        interval?: number;
        refreshToken?: boolean;
    }): Promise<void>;
    /**
     * onlineStatusChanged - this function is called when the browser connects or disconnects from the internet.
     *
     * @param {Event} event Event with type online or offline
     *
     */
    onlineStatusChanged: (event: Event) => void;
    onopen: (wsID: number) => void;
    onmessage: (wsID: number, event: WebSocket.MessageEvent) => void;
    onclose: (wsID: number, event: WebSocket.CloseEvent) => void;
    onerror: (wsID: number, event: WebSocket.ErrorEvent) => void;
    /**
     * _setHealth - Sets the connection to healthy or unhealthy.
     * Broadcasts an event in case the connection status changed.
     *
     * @param {boolean} healthy boolean indicating if the connection is healthy or not
     *
     */
    _setHealth: (healthy: boolean) => void;
    /**
     * _errorFromWSEvent - Creates an error object for the WS event
     *
     */
    _errorFromWSEvent: (event: WebSocket.CloseEvent | WebSocket.Data | WebSocket.ErrorEvent, isWSFailure?: boolean) => Error & {
        code?: string | number | undefined;
        isWSFailure?: boolean | undefined;
        StatusCode?: string | number | undefined;
    };
    /**
     * _listenForConnectionChanges - Adds an event listener for the browser going online or offline
     *
     */
    _listenForConnectionChanges: () => void;
    _removeConnectionListeners: () => void;
    /**
     * _destroyCurrentWSConnection - Removes the current WS connection
     *
     */
    _destroyCurrentWSConnection(): void;
    /**
     * _setupPromise - sets up the this.connectOpen promise
     */
    _setupConnectionPromise: () => void;
    /**
     * Schedules a next health check ping for websocket.
     */
    scheduleNextPing: () => void;
    /**
     * scheduleConnectionCheck - schedules a check for time difference between last received event and now.
     * If the difference is more than 35 seconds, it means our health check logic has failed and websocket needs
     * to be reconnected.
     */
    scheduleConnectionCheck: () => void;
}
export {};
//# sourceMappingURL=connection.d.ts.map