import connection from "../connection.js"

let comments = [];

// GET all comments
export const getComments = function(req, res){
    var query = "SELECT * FROM event_comments";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(comments);
}

// CREATE a new comment
export const createComments = function(req, res){

    const comment = req.body;
    
    let query = "INSERT INTO event_comments (comment_id,\
            account_type,\
            comment_email,\
            comment_pass,\
            comment_phone_number,\
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

    connection.query(query,[comment.comment_id,	
        comment.account_type,	
        comment.comment_email,
        comment.comment_pass,
        comment.comment_phone_number,
        comment.full_names,
        comment.business_name,
        comment.surname,
        comment.about_me,
        comment.interests,
        comment.music_interests,
        comment.date_of_birth,
        comment.facebook_link,
        comment.twitter_link,
        comment.instagram_link,
        comment.whatsapp_phone,
        comment.location,
        comment.date_created,
        comment.last_updated,
        comment.last_login,
        comment.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Comment added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single comment BY id
export const findComment = function(req, res){

    const commentId = req.params.id;

    var query = "SELECT * FROM event_comments WHERE id = "+commentId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}