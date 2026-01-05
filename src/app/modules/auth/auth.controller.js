import { authService } from "./auth.service.js"


 
 
 const credentialsLogin = async (req, res, next) => {
     try {
         
         const result = await authService.credentialsLogin(req.body)
           const { refreshToken, accessToken } = result;
         res.cookie("accessToken", accessToken, {
             httpOnly: true,
             secure: true,
            });
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: true,
            });
         res.status(200).json({
            success: true,
           message: "Login successful",
           data: result
         })
     } catch (error) {
         next(error)
     }
 }
 
const refreshToken = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    console.log(token)

    const result = await authService.refreshToken(token);

    res.cookie("accessToken", result.accessToken, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Access token refreshed",
    });
  } catch (error) {
    next(error);
  }
};
 
 export const authController = {
    credentialsLogin,
    refreshToken
 }