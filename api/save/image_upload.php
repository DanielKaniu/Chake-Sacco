<?php
//
//Access the coonfiguration file.
require_once '../config.php';
require_once '../save/save_image.php';
//
//Upload the image in the database.
function image_upload($image, $member_id){
    //
    //Decode the content of the image.
    $image_content = base64_decode($image);
    //
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    //
    //The file type, e.g., image/png or image/jpeg etc.
    $type = $finfo->buffer($image_content);
    //
    //The extension format of the file.
    var_dump($ext = explode('/', $type));
    //
    //These characters will help in formulating random numbers.
    $lower_case = 'abcdefghijklmnopqrstuvwxyz';
    $numeric = '1234567890';
    $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //
    //Create a unique image name.
    $image_name = str_shuffle($numeric.$lower_case.$numeric.$uppercase.$numeric) . '.' . $ext[1];
    //
    //Save the newly formulated image name to the database.
    save_image($image_name, $member_id);
    //
    $fh = fopen('../../src/assets/members/' . $image_name, 'w');
    //
    fwrite($fh, $image_content);
    //
    fclose($fh);
}