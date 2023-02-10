const Line = require("../Models/LinesModel");

exports.createLine = async (req, res) => {
  try {
    const count = await Line.find();
    const line = await Line.create({
      line: req.body.line,
      addedby: req.body.username,
      lnumber: count.length + 1,
    });
    res.redirect("/thankyou");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "some error occured!",
      err: err,
    });
  }
};

exports.getAllLines = async (req, res) => {
  try {
    const lines = await Line.find();
    res.status(200).json({
      status: "success",
      message: "Got all lines!",
      data: { lines },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "some error occured!",
      err: err,
    });
  }
};
