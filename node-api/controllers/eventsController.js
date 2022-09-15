import connection from "../connection.js"

let events = [];

// GET all events
export const getEvents = function(req, res){
    var query = "SELECT * FROM events_list ORDER BY start_date ASC";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })
    // res.json(events);
}


// GET Featured events
// export const getFeaturedEvents = function(req, res){
//     var query = "SELECT * FROM events_list where ORDER BY start_date ASC";

//     connection.query(query, (err, results)=>{
//         if (!err) {
//             return res.status(200).json(results);
//         }else{
//             return res.status(500).json(err);
//         }
//     })
//     // res.json(events);
// }


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
        date_modified,\
        event_poster_url) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

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
        event.date_modified,
        event.event_poster_url], (err, results)=>{
        if (!err) {
            return res.status(200).json({message: "Event added"});
        }else{
            return res.status(500).json(err);
        }
    })

}


// GET single event BY id
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

// GET single event BY id
export const findUserEvents = function(req, res){
    const userId = req.params.id;
    var query = "SELECT * FROM events_list WHERE user_id = '"+userId+"'";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}


// DASHBOARD events feed
export const eventsFeed = function(req, res){

    var query = "SELECT * FROM events_list";

    connection.query(query, (err, results)=>{
        if (!err) {
            let eventsList = [];
            
            let queryRsvp = "SELECT * FROM rsvp WHERE event_id = '"+element.event_id+"'";
            let queryComments = "SELECT * FROM event_comments WHERE event_id = '"+element.event_id+"'";
            let queryProfile = "SELECT * FROM user_profiles WHERE user_id = '"+element.user_id+"'";

            let rsvpList = []
            var commentsList = [];
            var profileData = [];


            // let eventsList = [];
            
            // //Example of queries in a sequential flow
            // const rsvpList = function(){
            //     return new Promise((resolve, reject)=>{
            //         connection.query(queryRsvp,  (error, results)=>{
            //             if(error){



            //                 return reject(error);
            //             }
            //             return resolve(res.json(results));
            //         });
            //     });
            // };
            
            // const commentsList = function(){
            //     return new Promise((resolve, reject)=>{
            //         connection.query(queryComments,  (error, results)=>{
            //             if(error){
            //                 return reject(error);
            //             }
            //             return resolve(results);
            //         });
            //     });
            // };
            
            // const profileData = function(){
            //     return new Promise((resolve, reject)=>{
            //         connection.query(queryProfile,  (error, results)=>{
            //             if(error){
            //                 return reject(error);
            //             }
            //             return resolve(results);
            //         });
            //     });
            // };
            
                        
            results.forEach(element => {


                 connection.query(queryRsvp, (err, results)=>{
                    if (!err) {
                        console.log(results);
                        rsvpList = results;

                        return res.status(200).json(rsvpList);
                        // console.log(rsvpList);
                    }else{
                        console.log(err);
                    }

                    // console.log(rsvpList);
                });

                console.log(rsvpList);
                
                connection.query(queryComments, (err, results)=>{
                    if (!err) {
                        // console.log(results);
                        commentsList = results;
                    }else{
                        console.log(err);
                    }
                })

                connection.query(queryProfile, (err, results)=>{
                    if (!err) {
                        // console.log(results);
                        profileData = results;
                    }else{
                        console.log(err);
                    }
                })



                
                
                
                // async function sequentialQueries () {
                    // try{
                    //     const result1 = await rsvpList();
                    // // const result2 = await commentsList();
                    // // const result3 = await profileData();

                    // // rsvpList = await queryPromise1();
                    
                    // // here you can do something with the three results

                        
                    // eventsList.push(
                    //     {
                    //         details:element,
                    //         rsvps:result1,
                    //         // comments:await commentsList(),
                    //         // user_profile:await profileData()
                    //     }
                    // )
                   
                    
                    // } catch(error){
                    //     console.log(error)
                    // }

                    // console.log(await rsvpList());  
                // }  
              
             

            });

            eventsList.push(
                        {
                            details:element,
                            // rsvps:result1,
                            // comments:await commentsList(),
                            // user_profile:await profileData()
                        }
                    )
            console.log(eventsList);    
            return res.status(200).json(eventsList);
 
        }else{
            // return res.status(500).json(err);
        }


    })

}
