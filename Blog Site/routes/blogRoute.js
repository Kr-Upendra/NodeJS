const blogController = require("../controllers/blogController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(blogController.getAllBlog)
  .post(blogController.createBlog);

router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
