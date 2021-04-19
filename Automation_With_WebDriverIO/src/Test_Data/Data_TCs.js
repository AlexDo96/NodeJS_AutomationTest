// We can organize test data with Constant as separately file .js

const VALID_LOGIN_CREDS = {
    username: "tomsmith",
    password: "SuperSecretPassword!"
}


const INVALID_LOGIN_CREDS = {
    username: "AAAAAAAAAAAAA",
    password: "SuperSecretPassword!"
}

exports.VALID_LOGIN_CREDS = VALID_LOGIN_CREDS;

exports.INVALID_LOGIN_CREDS = INVALID_LOGIN_CREDS;