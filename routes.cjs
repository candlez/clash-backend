const { Router } = require("express");

const router = Router();

router.get("/api/v1/test", (req, res) => {
    res.send("this is a test that works")
});

module.exports = router;