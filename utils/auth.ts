import { createHash } from "crypto";

async function hashPassword(password:any) {
    
    const hash = createHash("sha256");
    const hashedPassword = await hash.update(password).digest("hex");
    console.log(hashedPassword);

    return hashedPassword;

};

export {hashPassword};  