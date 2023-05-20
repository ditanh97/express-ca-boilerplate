import authServiceImpl from '../../internalServices/AuthenticationServices.js';


export default function authMiddleware(req, res, next) {
  // Get token from header
  const token = req.header('Authorization');
  const authService = new authServiceImpl();
  if (!token) {
    const error = new Error('No access token found');
    error.statusCode = 401;
    throw error;

  }
  if (token.split(' ')[0] !== 'Bearer') {
    const error = new Error('Invalid access token format');
    error.statusCode = 403;
    throw error;
  }
  try {
    const decoded = authService.verify(token.split(' ')[1]);
    req.user = decoded.user;
    next();
  } catch (err) {
    throw new Error('Token is not valid');
  }
}
