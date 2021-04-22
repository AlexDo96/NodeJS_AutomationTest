// We can organize test data with Constant as separately file .js

const VALID_LOGIN_CREDS = {
    username: "tomsmith",
    password: "SuperSecretPassword!"
}


const INVALID_LOGIN_CREDS = {
    username: "AAAAAAAAAAAAA",
    password: "SuperSecretPassword!"
}

const INVALID_LOGIN_USERNAME = {
    username: "AAAA!#@!$",
    password: "SuperSecretPassword!"
}

const INVALID_LOGIN_PASSWORD = {
    username: "tomsmith",
    password: "SuperSecret!"
}

exports.VALID_LOGIN_CREDS = VALID_LOGIN_CREDS;

exports.INVALID_LOGIN_CREDS = INVALID_LOGIN_CREDS;

exports.INVALID_LOGIN_USERNAME = INVALID_LOGIN_USERNAME;

exports.INVALID_LOGIN_PASSWORD = INVALID_LOGIN_PASSWORD;