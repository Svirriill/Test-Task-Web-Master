<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$product = $_POST['product'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;
$mail->Username = 'ddsasdqwea@mail.ru';
$mail->Password = '31313169qqw';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;$mail->setFrom('ddsasdqwea@mail.ru');
$mail->addAddress('biran300@mail.ru');
$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Имя: ' .$name . '; телефон: ' .$phone. '; почта: ' .$email. '; товар: ' .$product '.';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: success.html');
}

?>