<?php
//
//Bring in the necessary files.
include_once '../config.php';
//
//Fetch a member's id.
function get_user_pk($email){
    //
    //Access config file's object.
    global $pdo;
    //
    //The query to get the member.
    $query = "SELECT 
            member.member
        FROM member
        WHERE member.email = '$email'";
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
        return $row[0]['member'];
    }
}