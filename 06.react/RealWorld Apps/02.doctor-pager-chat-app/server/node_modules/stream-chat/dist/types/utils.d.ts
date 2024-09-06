/// <reference types="node" />
import FormData from 'form-data';
import { AscDesc, LiteralStringForUnion, OwnUserResponse, UnknownType, UserResponse } from './types';
/**
 * logChatPromiseExecution - utility function for logging the execution of a promise..
 *  use this when you want to run the promise and handle errors by logging a warning
 *
 * @param {Promise<T>} promise The promise you want to run and log
 * @param {string} name    A descriptive name of what the promise does for log output
 *
 */
export declare function logChatPromiseExecution<T>(promise: Promise<T>, name: string): void;
export declare const sleep: (m: number) => Promise<void>;
export declare function isFunction<T>(value: Function | T): value is Function;
export declare const chatCodes: {
    TOKEN_EXPIRED: number;
    WS_CLOSED_SUCCESS: number;
};
export declare function isOwnUser<ChannelType extends UnknownType = UnknownType, CommandType extends string = LiteralStringForUnion, UserType extends UnknownType = UnknownType>(user?: OwnUserResponse<ChannelType, CommandType, UserType> | UserResponse<UserType>): user is OwnUserResponse<ChannelType, CommandType, UserType>;
export declare function isOwnUserBaseProperty(property: string): boolean;
export declare function addFileToFormData(uri: string | NodeJS.ReadableStream | Buffer | File, name?: string, contentType?: string): FormData;
export declare function normalizeQuerySort<T extends Record<string, AscDesc | undefined>>(sort: T | T[]): {
    direction: AscDesc;
    field: keyof T;
}[];
/**
 * retryInterval - A retry interval which increases acc to number of failures
 *
 * @return {number} Duration to wait in milliseconds
 */
export declare function retryInterval(numberOfFailures: number): number;
export declare function randomId(): string;
//# sourceMappingURL=utils.d.ts.map