import express from "express";
import { isAuthorised } from "../middlewares/auth.js";
import { postApplication,
    applicantDeleteApplication, applicantGetAllApplications, recuiterGetAllApplications } from "../contollers/applicationController.js";

const router = express.Router();

router.get("/recruiter/getall", isAuthorised, recuiterGetAllApplications);
router.get("/applicant/getall", isAuthorised, applicantGetAllApplications);
router.delete("/delete/:id", isAuthorised, applicantDeleteApplication);
router.post("/post", isAuthorised, postApplication);

export default router;
