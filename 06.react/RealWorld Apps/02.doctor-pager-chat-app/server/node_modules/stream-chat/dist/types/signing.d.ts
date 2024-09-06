import { Secret, SignOptions } from 'jsonwebtoken';
import { UnknownType } from './types';
/**
 * Creates the JWT token that can be used for a UserSession
 * @method JWTUserToken
 * @memberof signing
 * @private
 * @param {Secret} apiSecret - API Secret key
 * @param {string} userId - The user_id key in the JWT payload
 * @param {UnknownType} [extraData] - Extra that should be part of the JWT token
 * @param {SignOptions} [jwtOptions] - Options that can be past to jwt.sign
 * @return {string} JWT Token
 */
export declare function JWTUserToken(apiSecret: Secret, userId: string, extraData?: UnknownType, jwtOptions?: SignOptions): string;
export declare function JWTServerToken(apiSecret: Secret, jwtOptions?: SignOptions): string;
export declare function UserFromToken(token: string): string;
/**
 *
 * @param {string} userId the id of the user
 * @return {string}
 */
export declare function DevToken(userId: string): string;
/**
 *
 * @param {string} body the signed message
 * @param {string} secret the shared secret used to generate the signature (Stream API secret)
 * @param {string} signature the signature to validate
 * @return {boolean}
 */
export declare function CheckSignature(body: string, secret: string, signature: string): boolean;
//# sourceMappingURL=signing.d.ts.map