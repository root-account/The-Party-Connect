import connection from "../connection.js"

let rsvps = [];

// GET all rsvps
export const getRsvps = function(req, res){
    var query = "SELECT * FROM rsvp";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(rsvps);
}

// CREATE a new rsvp
export const createRsvps = function(req, res){

    const rsvp = req.body;
    
    let query = "INSERT INTO rsvp (rsvp_id,\
            account_type,\
            rsvp_email,\
            rsvp_pass,\
            rsvp_phone_number,\
            full_names,\
            business_name,\
            surname,\
            about_me,\
            interests,\
            music_interests,\
            date_of_birth,\
            facebook_link,\
            twitter_link,\
            instagram_link,\
            whatsapp_phone,\
            location,\
            date_created,\
            last_updated,\
            last_login,\
            login_token) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    connection.query(query,[rsvp.rsvp_id,	
        rsvp.account_type,	
        rsvp.rsvp_email,
        rsvp.rsvp_pass,
        rsvp.rsvp_phone_number,
        rsvp.full_names,
        rsvp.business_name,
        rsvp.surname,
        rsvp.about_me,
        rsvp.interests,
        rsvp.music_interests,
        rsvp.date_of_birth,
        rsvp.facebook_link,
        rsvp.twitter_link,
        rsvp.instagram_link,
        rsvp.whatsapp_phone,
        rsvp.location,
        rsvp.date_created,
        rsvp.last_updated,
        rsvp.last_login,
        rsvp.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Rsvp added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single rsvp BY id
export const findRsvp = function(req, res){

    const rsvpId = req.params.id;

    var query = "SELECT * FROM rsvp WHERE id = "+rsvpId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}


// GET single rsvp BY id
export const getUserRsvp = function(req, res){

    const user_id = req.params.user_id;

    var query = "SELECT * FROM rsvp WHERE user_id = "+user_id;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}