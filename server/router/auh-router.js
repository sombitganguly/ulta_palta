const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).send("O death, bceome my blade once more");
});

router.route('/about').post((req, res)=>{
    console.log(req.body);
    res.status(200).send();
});


module.exports = router;