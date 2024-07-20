import express from "express";
import saveContact, { getContactList } from "../controllers/contact.js";
import {
  AddAppointMentCollection,
  AppointmentPatientsList,
  appointMentByDate,
  DoctorList,
  IsDoctor,
  AddServices,
  ServicesList,
  AddReview,
  ReviewsList,
  UpdateUserInfo,
  AddDoctor,
  updateAppointment,
  PatientList,getServices,
  deleteService
} from "../controllers/doctor.js";
import { login, register, viewUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("working token ");
});
//admin can access
router.post("/auth/addServices", AddServices);
router.get("/auth/services", getServices);
router.delete("/auth/services/:id", deleteService);

//user or admin can access
router.post("/auth/addAppointMent", verifyToken, AddAppointMentCollection);
router.post("/auth/appointByDate", verifyToken, verifyUser, appointMentByDate);
router.post("/auth/addReview", verifyToken, AddReview);
router.put("/auth/updateInfo/:id", verifyToken, UpdateUserInfo);
router.get("/auth/appointmentpatients", verifyToken, verifyUser, AppointmentPatientsList);
router.get("/auth/patients", verifyToken, verifyUser, PatientList);

router.put('/auth/patients/:id',updateAppointment)
router.get("/auth/users", verifyToken, verifyAdmin, viewUser);

//global
router.get("/auth/ourServices", ServicesList);
router.post("/auth/isDoctor", IsDoctor);
router.get("/auth/reviews", ReviewsList);
router.get("/auth/doctors", DoctorList);
router.post("/auth/addDoctor", AddDoctor);

//auth
router.post("/auth/register", register);
router.post("/auth/login", login);

router.post('/saveContact',saveContact);
router.get('/getContact',getContactList);
export default router;
