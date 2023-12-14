/*  Imagine you are working for a digital banking platform, and your team is tasked with improving
the security of customer accounts. Your challenge is to create a function that generates a random 
4-digit OTP (OneTime Password) for authentication purposes.  */


/*
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

const otp = generateOTP();
console.log(otp);
*/


function generateOtp() {
    let max = 9999;
    let min = 1000;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
}

console.log(`Here is your otp: ${generateOtp()}`);
