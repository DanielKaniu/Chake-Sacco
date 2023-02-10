<?php
//
//Bring in the necessary files.
require_once '../config.php';
//
//Save the newly uploaded image to the database.
function save_image($image_name, $member_id){
    //
    //Access the config file's pdo object.
    global $pdo;
    //
    //The query statement.
    $query = "INSERT INTO `image` ( `name`, `member`, `created_at` ) 
        VALUES('$image_name', '$member_id', CURRENT_TIMESTAMP)";
    //
    //Execute the query.
    $pdo->exec($query);
}