const express = require("express")
const {gettask, createtask, updatetask, deletetask, patchtask} = require("../controllers/tasks")
const router = express.Router();


router.post("/",createtask);
router.delete("/:id",deletetask);
router.patch("/:id", patchtask);
router.put("/", updatetask);
router.get("/", gettask);

module.exports = router