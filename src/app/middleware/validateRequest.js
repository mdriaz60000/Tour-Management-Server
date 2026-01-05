export const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body
    });
    next();
  } catch (error) {
   next(error)
  }
};
