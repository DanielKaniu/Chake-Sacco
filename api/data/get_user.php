<?php
//
//Bring in the necessary files.
include_once '../config.php';
//
//Fetch the sacco member.
function get_member(){
    //
    //Access config file's object.
    global $pdo;
    //
    //The query to get the member.
    $query = "SELECT 
                member.first_name, member.second_name, member.email, member.occupation, member.gender, member.phone,
                member.location, fee.contribution, image.name as image
            FROM member
            INNER JOIN fee on fee.member = member.member
            LEFT join image on image.member = member.member";
    //
    //Execute the query.
    $statement = $pdo->query($query);
    //
    //Bring back the result.
    $row = $statement->fetchAll(PDO::FETCH_ASSOC);
    //
    //Check to see if we have some results.
    //
    //At this point there's no data from the database.
    if(count($row) === 0){
        //
        //Display the potential.
        echo json_encode([
                "ok" => false,
                "data" => "No data"
        ]);
    }
    //
    //At this point there's data from the database.
    if(count($row) > 0){
        //
        //Display the potential.
        echo json_encode(
            [
                "ok" => true,
                "data" => $row
            ]
        );
    }
}
//
//Invoke the function.
get_member();