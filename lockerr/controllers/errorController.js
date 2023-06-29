// `Requested ${req.originalUrl} does not exist on this server!`,

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "ERROR 🔥";
  console.log(err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

export default errorController;
