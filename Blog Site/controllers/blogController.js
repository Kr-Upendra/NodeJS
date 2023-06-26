const Blog = require("../dbConnection/dbConnection");

exports.getAllBlog = (req, res) => {
  Blog.query("SELECT * FROM blogs", (err, result) => {
    if (err) {
      return res.status(404).json({
        status: "FAILED",
        error: err,
      });
    } else
      res.status(200).json({
        status: "SUCCESS",
        message: "GET ALL BLOGS LIST!",
        length: result.length,
        docs: result,
      });
  });
};

exports.getBlog = (req, res) => {
  const ID = req.params.id;
  Blog.query(`SELECT * FROM blogs WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      return res.status(404).json({
        status: "FAILED",
        message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        error: err,
      });
    } else {
      if (result.length < 1)
        return res.status(404).json({
          status: "FAILED",
          message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        });

      res.status(200).json({
        status: "SUCCESS",
        message: `BLOG WITH GIVEN ID: ${ID}!`,
        docs: result,
      });
    }
  });
};

exports.createBlog = (req, res) => {
  const { title, postImage, description } = req.body;
  Blog.query(
    "INSERT INTO blogs (title, postImage, postedBy, description) VALUES (?, ?, ?, ?)",
    [title, postImage, "Admin", description],
    (err, result) => {
      if (err) {
        return res.status(400).json({
          status: "FAILED",
          error: err,
        });
      } else
        res.status(201).json({
          status: "SUCCESS",
          message: "NEW BLOG CREATED!",
          docs: result,
        });
    }
  );
};

exports.updateBlog = (req, res) => {
  const ID = req.params.id;
  const updatedValue = req.body;

  const keys = Object.keys(updatedValue);
  const values = Object.values(updatedValue);

  const placeHolders = keys.map((key) => `${key} = ?`).join(", ");

  Blog.query(
    `UPDATE blogs SET ${placeHolders} WHERE ID = ?`,
    [...values, ID],
    (err, result) => {
      if (err) {
        return res.status(404).json({
          status: "FAILED",
          message: "COULDN'T FOUND BLOG WITH GIVEN ID",
          error: err,
        });
      } else {
        if (result === null) {
          return res.status(404).json({
            status: "FAILED",
            message: "COULDN'T FOUND BLOG WITH GIVEN ID",
          });
        } else {
          res.status(200).json({
            status: "SUCCESS",
            message: `BLOG WITH GIVEN ID: ${ID}!`,
            docs: result,
          });
        }
      }
    }
  );
};

exports.deleteBlog = (req, res) => {
  const ID = req.params.id;
  Blog.query(`DELETE FROM blogs WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      return res.status(404).json({
        status: "FAILED",
        message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        error: err,
      });
    } else {
      if (result === null) {
        return res.status(404).json({
          status: "FAILED",
          message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        });
      } else {
        res.status(204).json({
          status: "SUCCESS",
        });
      }
    }
  });
};

/*
Blog.query(`SELECT * FROM blogs WHERE ID = ${ID}`, (err, result) => {
    if (err) {
      return res.status(404).json({
        status: "FAILED",
        message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        error: err,
      });
    } else {
      if (result.length < 1)
        return res.status(404).json({
          status: "FAILED",
          message: "COULDN'T FOUND BLOG WITH GIVEN ID",
        });

      res.status(200).json({
        status: "SUCCESS",
        message: `BLOG WITH GIVEN ID: ${ID}!`,
        docs: result,
      });
    }
  });
*/
