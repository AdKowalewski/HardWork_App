import jwt from 'jsonwebtoken';

function jwtTokens({ id, name, email }) {
    const user = { id, name, email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1h" });
    return ({ accessToken, refreshToken, name });
}

export { jwtTokens };