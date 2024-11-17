export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      // `req.user.role` should be populated by the authentication middleware
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: `Role (${req.user.role}) is not authorized to access this resource.`,
        });
      }
      next();
    };
  };  