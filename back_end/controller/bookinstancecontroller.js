const BookInstance = require("../models/bookinstance");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
//this is used for get clothinstance matching clothId from our database`
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
    const bookInstance = await BookInstance.findById(req.params.id)
      .populate("clothId")
      .exec();
  
    if (bookInstance === null) {
      // No results.
      const err = new Error("cloth copy not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("select_cloth", {
      title: "Fashion choices",
      fashioninstance: fashioninstance,
    });
  });