const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a User Using: POST "/api/auth/" Doesn't require auth.
router.post("/", ( request, response )=>{
    console.log( request.body );
    const user = User(request.body);
    console.log(user);
    user.save();
    response.send(user);
});

router.get("/", ( request, response )=>{
   User.find()
   .then(( users )=>{
       response.status(200).json( users );
   })
   .catch(( error )=>{
       response.status( 400 ).json( error );
   });
});

router.put("/:userId", ( request, response )=>{

});

module.exports = router;