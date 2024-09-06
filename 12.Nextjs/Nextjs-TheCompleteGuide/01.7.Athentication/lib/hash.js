import crypto from "node:crypto";

export function hashUserPassword(password){
    const salt = crypto.randomBytes(16).toString("hex");
    const hashPassword = crypto.scryptSync(password, salt, 64);
    return hashPassword.toString("hex") + ":" + salt;
}

export function verifyPassword(storedPassword, suppliedPassword){
    const [ hashedPassword , salt] = storedPassword.split(":");
    const hashedPasswordBuf = Buffer.from(hashUserPassword, "hex");
    const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);

    return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf)

}