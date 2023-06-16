<?php

$dbc = mysqli_connect('localhost', 'root', '', 'feedback');

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$name = $data['name'];
$comment = $data['comment'];


$query = "INSERT INTO feedback (email, first_name, comment)
    VALUES ('$email', '$name', '$comment')";

$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Feedback has been sent'));

mysqli_close($dbc);