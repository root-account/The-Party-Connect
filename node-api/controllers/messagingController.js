import connection from "../connection.js"

let messages = [];

// GET all messages
export const getMessages = function(req, res){
    var query = "SELECT * FROM direct_messages";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(messages);
}

// CREATE a new message
export const createMessages = function(req, res){

    const message = req.body;
    
    let query = "INSERT INTO direct_messages (message_id,\
            account_type,\
            message_email,\
            message_pass,\
            message_phone_number,\
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

    connection.query(query,[message.message_id,	
        message.account_type,	
        message.message_email,
        message.message_pass,
        message.message_phone_number,
        message.full_names,
        message.business_name,
        message.surname,
        message.about_me,
        message.interests,
        message.music_interests,
        message.date_of_birth,
        message.facebook_link,
        message.twitter_link,
        message.instagram_link,
        message.whatsapp_phone,
        message.location,
        message.date_created,
        message.last_updated,
        message.last_login,
        message.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Message added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single message BY id
export const findMessage = function(req, res){

    const messageId = req.params.id;

    var query = "SELECT * FROM direct_messages WHERE id = "+messageId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}