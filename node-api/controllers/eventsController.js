import connection from "../connection.js"

let events = [];

// GET all events
export const getEvents = function(req, res){
    var query = "SELECT * FROM events_list";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(events);
}


// CREATE a new event
export const createEvents = function(req, res){
    let query = "INSERT INTO events_list (user_id, event_id,\
        category_id,\
        event_type,\
        tittle,\
        entrance_fee,\
        event_desc,\
        address,\
        venue,\
        start_date,\
        end_date,\
        number_guests,\
        alcohol_allowed,\
        alcohol_pricing,\
        indoor_outdoor,\
        plus_ones,\
        parking_availability,\
        music_kind,\
        dress_code,\
        contact_number,\
        email_address,\
        social_hashtag,\
        date_created,\
        date_modified) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    const event = req.body;

    // events.push({
    //     name: name,
    //     age: age
    // })

    // console.log(req.body);
    // res.json(events);

    connection.query(query,[event.user_id,
        event.event_id,
        event.category_id,
        event.event_type,
        event.tittle,
        event.entrance_fee,
        event.event_desc,
        event.address,
        event.venue,
        event.start_date,
        event.end_date,
        event.number_guests,
        event.alcohol_allowed,
        event.alcohol_pricing,
        event.indoor_outdoor,
        event.plus_ones,
        event.parking_availability,
        event.music_kind,
        event.dress_code,
        event.contact_number,
        event.email_address,
        event.social_hashtag,
        event.date_created,
        event.date_modified], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Event added"});
        }else{
            return res.status(500).json(err);
        }
    })

}


// GET single user BY id
export const findEvent = function(req, res){
    const eventId = req.params.id;
    var query = "SELECT * FROM events_list WHERE id = "+eventId;

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}
