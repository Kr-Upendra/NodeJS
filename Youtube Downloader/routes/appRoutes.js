const express = require("express");
const appServices = require("../services/appServices");
const router = express.Router();

router.route("/").get(appServices.homeRoute);
router.route("/download").get(appServices.downloadRoute);
router.route("/about").get(appServices.aboutRoute);
router.route("/service").get(appServices.serviceRoute);
router.route("/contact").get(appServices.contactRoute);

module.exports = router;
