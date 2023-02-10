<?php
//
//Bring in the necessary files.
include_once '../config.php';
include_once '../data/get_user_pk.php';
include_once './image_upload.php';
//
//Get the data on the request body;
$data = json_decode(file_get_contents('php://input'), 1);
//
//Fetch the sacco member.
function register($data){
    //
    //Access config file's object.
    global $pdo;
    //
    $member = $data['user_details'];
    //
    //Get the member's contents.
    $first_name = $member['first_name'];
    $second_name = $member['second_name'];
    $email = $member['email'];
    $occupation = $member['occupation'];
    $gender = $member['gender'];
    $phone = $member['phone'];
    $location = $member['location'];
    $contribution = $member['contribution'];
    var_dump($image_content = $data['image_content']);
    //
    //The query to get the member.
    $query = "INSERT INTO member(
                first_name, second_name, email, occupation, 
                gender, phone, location, created_at)
        VALUES(
            '$first_name', 
            '$second_name', 
            '$email', 
            '$occupation', 
            '$gender', 
            '$phone', 
            '$location', 
            CURRENT_TIMESTAMP)";
    //
    //Execute the query.
    if($pdo->exec($query)){
        //
        //At this point the user is already saved in database. Get the user's id.
        $member_id = get_user_pk($email);
        //
        //The query to save the contribution.
        $query2 = "INSERT INTO fee(contribution, member, created_at)
            VALUES('$contribution', '$member_id', CURRENT_TIMESTAMP)";
        //
        //Save the contribution
        if($pdo->exec($query2)){
            //
            //After saving the contribution, save the user's image.
            image_upload($image_content, $member_id);
            //
            //Display a positive message.
            echo json_encode([
                'ok'=>true,
                'data'=>'Registration is successful'
            ]);
        }
        else{
            //
            //Display a message.
            echo json_encode([
                'ok'=>false,
                'data'=>'Contribution not saved'
            ]);
        } 
    }
    else{
        //
        //Display a message.
        echo json_encode([
            'ok'=>false,
            'data'=>'Registration failed'
        ]);
    } 
}
//
//Call the method.
register($data);