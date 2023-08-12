import { createHash } from "crypto";
async function hashPassword(password:any) {
    
    const hash = createHash("sha256");
    const hashedPassword = await hash.update(password).digest("hex");
    console.log(hashedPassword);

    return hashedPassword;

};

function verifyPassword(password:any, hashedPassword:any) {
    const inputHash = createHash('sha256').update(password).digest('hex');
    const isValid = inputHash === hashedPassword;
    console.log(isValid);
    return isValid;
  }

export {hashPassword,verifyPassword};  