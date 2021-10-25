const express = require("express");
const router = express.Router();

router.get("/", ( request, response )=>{
    obj = {
        a: "this",
        number: 29
    };

    response.json( obj );

});

module.exports = router;