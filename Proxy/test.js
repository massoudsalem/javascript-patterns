import userProxy from "./index.js";

try {
    console.log('Setting email to john@doe');
    userProxy.email = 'john@doe';
} catch (error) {
    console.log('Setting email to john@doe failed!')
    console.error('Error:',error.message);
}

try {
    console.log('Setting email to john@gmail.com')
    userProxy.email = 'john@gmail.com';
    console.log("Email set successfully!");
    console.log(userProxy.email);
} catch (error) {
    console.error(error.message);
}