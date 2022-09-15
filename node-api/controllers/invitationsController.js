import connection from "../connection.js"

let invitations = [];

// GET all invitations
export const getInvitations = function(req, res){
    var query = "SELECT * FROM invitations";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(invitations);
}

// CREATE a new invitation
export const createInvitations = function(req, res){

    const invitation = req.body;
    
    let query = "INSERT INTO invitations (invitation_id,\
            account_type,\
            invitation_email,\
            invitation_pass,\
            invitation_phone_number,\
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

    connection.query(query,[invitation.invitation_id,	
        invitation.account_type,	
        invitation.invitation_email,
        invitation.invitation_pass,
        invitation.invitation_phone_number,
        invitation.full_names,
        invitation.business_name,
        invitation.surname,
        invitation.about_me,
        invitation.interests,
        invitation.music_interests,
        invitation.date_of_birth,
        invitation.facebook_link,
        invitation.twitter_link,
        invitation.instagram_link,
        invitation.whatsapp_phone,
        invitation.location,
        invitation.date_created,
        invitation.last_updated,
        invitation.last_login,
        invitation.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Invitation added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single invitation BY id
export const findInvitation = function(req, res){

    const invitationId = req.params.id;

    var query = "SELECT * FROM invitations WHERE id = "+invitationId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}


// GET single rsvp BY id
export const getUserInvitation = function(req, res){

    const user_id = req.params.user_id;

    var query = "SELECT * FROM invitations WHERE user_id = "+user_id;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}