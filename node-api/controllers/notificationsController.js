import connection from "../connection.js"

let notifications = [];

// GET all notifications
export const getNotifications = function(req, res){
    var query = "SELECT * FROM notifications";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(notifications);
}

// CREATE a new notification
export const createNotifications = function(req, res){

    const notification = req.body;
    
    let query = "INSERT INTO notifications (notification_id,\
            account_type,\
            notification_email,\
            notification_pass,\
            notification_phone_number,\
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

    connection.query(query,[notification.notification_id,	
        notification.account_type,	
        notification.notification_email,
        notification.notification_pass,
        notification.notification_phone_number,
        notification.full_names,
        notification.business_name,
        notification.surname,
        notification.about_me,
        notification.interests,
        notification.music_interests,
        notification.date_of_birth,
        notification.facebook_link,
        notification.twitter_link,
        notification.instagram_link,
        notification.whatsapp_phone,
        notification.location,
        notification.date_created,
        notification.last_updated,
        notification.last_login,
        notification.login_token], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Notification added"});
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single notification BY id
export const findNotification = function(req, res){

    const notificationId = req.params.id;

    var query = "SELECT * FROM notifications WHERE id = "+notificationId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}

// GET single rsvp BY id
export const getUserNotifications = function(req, res){

    const user_id = req.params.user_id;

    var query = "SELECT * FROM notifications WHERE user_id = "+user_id;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}