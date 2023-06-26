exports.getAllBlog = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "GET ALL BLOGS LIST!",
  });
};

exports.getBlog = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "GET A BLOG!",
  });
};

exports.createBlog = (req, res) => {
  res.status(201).json({
    status: "SUCCESS",
    message: "New Database Created!",
  });
};

exports.updateBlog = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "BLOG UPDATED!",
  });
};

exports.deleteBlog = (req, res) => {
  res.status(204).json({
    status: "SUCCESS",
    message: "BLOG DELETED!",
  });
};
