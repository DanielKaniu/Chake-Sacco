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
    $query = 'SELECT * FROM member';
}