const jwt = require('jsonwebtoken');
const APP_SECRET = "APP_SECRET";

function getUserId(context) {
    const Auth = context.request.get('Authorization')
    if (Auth) {
        const token = Auth.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }
}
