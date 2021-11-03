const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");

router.get("/", ( request, response )=>{
    Notes.find()
    .then(( notes )=>{
        response.status( 200 ).json( notes );
    })
    .catch(( error )=>{
        response.status( 400 ).json( error );
    });

});

router.post("/", ( request, response )=>{
    const note = Notes( request.body );

    try{
        note.save();
    } catch( error ){
        console.log( error);
        response.status( 400 ).json( error );
    }

    response.status( 200 ).json( note );
});

router.put("/:noteId", ( request, response )=>{
    const noteId = request.params.noteId;
    const note = Notes( request.body );

    console.log("----------Note-Id: ", noteId );
    console.log("----------Note", note );

    Notes.findOneAndUpdate({ _id: noteId }, note )
    .then(( note )=>{
        Notes.findOne({ _id: noteId })                                     
        .then(( note )=>{
            console.log( "=====Inner----", note );
            response.status( 200 ).json( note );
        }).catch(( error )=>{
            console.log( "Inner-Error::::::::::::::::::::::::", error );
        });
        console.log( note );
        response.status( 200 ).json( note );
    })
    .catch(( error )=>{
        console.log( error );
        response.status( 400 ).json( error );
    })


});

module.exports = router;