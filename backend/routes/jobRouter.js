import express from "express";
import { deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob } from "../contollers/jobController.js";
import { isAuthorised } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorised, postJob)
router.get("/getmyjobs", isAuthorised, getMyJobs)
router.put("/updatejob/:id", isAuthorised, updateJob)
router.delete("/deletejob/:id", isAuthorised, deleteJob);
router.get("/:id", isAuthorised, getSingleJob)

export default router;
