import express from "express";
const router = express.Router();

import {
  getFlights,
  getFlightById,
  createFlight,
  getflightsearch,
  deleteFlight,
  updateFlight,
} from "../controllers/atcController.js";
// .get(getFlights)
router.route("/").get(getflightsearch).post(createFlight);
router.route("/:id").get(getFlightById).put(updateFlight).delete(deleteFlight);

export default router;
