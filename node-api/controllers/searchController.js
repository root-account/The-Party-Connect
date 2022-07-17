import connection from "../connection.js"


let searchResults = [];


// GET single user BY id
export const seachEvent = function(req, res){
    const searchTerm = req.params.term;
    var query = "SELECT * FROM events_list WHERE (tittle LIKE '%"+searchTerm+"%' OR event_desc LIKE '%"+searchTerm+"%' OR venue LIKE '%"+searchTerm+"%')";

    connection.query(query, (err, results)=>{
        if (!err) {
            return res.status(200).json(results);
        }else{
            return res.status(500).json(err);
        }
    })

}