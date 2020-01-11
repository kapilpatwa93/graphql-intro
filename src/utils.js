const jwt = require('jsonwebtoken');
const path = require('path');
const ROOT_DIR = path.dirname(require.main.filename);
const APP_SECRET = "APP_SECRET";

function getUserId(context) {
    const Auth = context.request.get('Authorization');
    if (Auth) {
        const token = Auth.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }
    throw new Error('Not Authenticated')
}

module.exports = {
    APP_SECRET,
    ROOT_DIR,
    getUserId
};