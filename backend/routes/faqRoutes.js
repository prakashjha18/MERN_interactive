import express from 'express'
const router = express.Router()

import {
    createFaq,
    getsinglefaq,
    getfaqs,
    createqestionforfaq,
    updatequestion
  } from "../controllers/faqController.js";


router.route("/addquestion/:id").post(createqestionforfaq)
router.route("/").post(createFaq).get(getfaqs);
router.route("/:id").get(getsinglefaq);
router.route("/updatequestion/:faqid/:qid").put(updatequestion)

export default router