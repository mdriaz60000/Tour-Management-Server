import config from "../../config/index.js";
import {user} from "./../user/user.model.js"
import jwt from "jsonwebtoken"


const credentialsLogin = async (payload) => {
    const{email, password} = payload;
    const result = await user.findOne({
        email: email,
       password: password
    })
     if (!result) {
    throw new Error("User not found or account is deleted");
  }
    const accessToken = jwt.sign(
    { email: result.email, userId: result._id, role: result.role },
   config.jwt_access_secret,
  { expiresIn: config.expiresIn }
  );
    const refreshToken = jwt.sign(
    { email: result.email, userId: result._id, role: result.role },
   config.jwt_refresh_secret,
  { expiresIn: config.expiresIn_refresh }
  );
    return { accessToken, refreshToken }

}

const refreshToken = async (token) => {
  if (!token) {
    throw new Error("Refresh token missing");
  }


  const decoded = jwt.verify(token, config.jwt_refresh_secret);

 
  const newAccessToken = jwt.sign(
    {
      email: decoded.email,
      userId: decoded.userId,
      role: decoded.role,
    },
    config.jwt_access_secret,
    { expiresIn: config.expiresIn } 
  );

  
  return { accessToken: newAccessToken };
};




export const authService ={
    credentialsLogin,
    refreshToken
}