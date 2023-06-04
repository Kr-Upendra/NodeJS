module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error 🔥";

  if (err.name === "CastError") {
    return res.status(400).json({
      status: "fail",
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  if (err.code === 11000) {
    const value = err.message.match(/(["'])(.*?[^\\])\1/)[0];
    return res.status(400).json({
      status: "fail",
      message: `Duplicate field value ${value}. Please use another!`,
    });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({
      status: "fail",
      message: `Invalid input data, ${errors.join(". ")}`,
    });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      status: "fail",
      message: `Invalid token. Please login again!`,
    });
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};
