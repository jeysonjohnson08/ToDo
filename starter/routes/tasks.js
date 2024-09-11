const express = require("express")
const {gettask,getalltask, edittask, createtask, updatetask, deletetask} = require("../controllers/tasks")
const router = express.Router();


router.post("/",createtask);
router.delete("/:id",deletetask);
router.patch("/:id", updatetask);
router.get("/:id", gettask);
router.get("/", getalltask);
router.put("/:id",edittask)

module.exports = router