import connection from "../connection.js"

let users = [];

// GET all users
export const getUsers = function(req, res){
    var query = "SELECT * FROM user_profiles";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(users);
}

// CREATE a new user
export const createUsers = function(req, res){

    const user = req.body;
    
    let query = "INSERT INTO user_profiles (user_id,\
            account_type,\
            user_email,\
            user_pass,\
            user_phone_number,\
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

    connection.query(query,[user.user_id,	
        user.account_type,	
        user.user_email,
        user.user_pass,
        user.user_phone_number,
        user.full_names,
        user.business_name,
        user.surname,
        user.about_me,
        user.interests,
        user.music_interests,
        user.date_of_birth,
        user.facebook_link,
        user.twitter_link,
        user.instagram_link,
        user.whatsapp_phone,
        user.location,
        user.date_created,
        user.last_updated,
        user.last_login,
        user.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "User added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single user BY id
export const findUser = function(req, res){

    const userId = req.params.id;

    var query = "SELECT * FROM user_profiles WHERE id = "+userId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}