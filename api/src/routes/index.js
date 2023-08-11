const { Router } = require('express');
const userRouter = require("")

const router = Router();

router.get("/user", userRouter)

module.exports = router;