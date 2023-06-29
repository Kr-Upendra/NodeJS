const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "ERROR 🔥";

  if (err.name === "CastError") {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return res.status(400).json({
      status: err.status,
      message: message,
    });
  }

  if (err.code === 11000) {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return res.status(400).json({
      status: err.status,
      message: message,
    });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    return res.status(400).json({
      status: err.status,
      message: message,
    });
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

export default errorController;
