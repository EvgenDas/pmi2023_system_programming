<?php

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["text"];

    $arr = array(
        'Имя: ' => $name,
        'Фамилия: ' => $surname,
        'Телефон' => $phone,
        'Email' => $email,
        'Сообщение:' => $message
    );
      
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };


    $token = "6155390684:AAGBLccZaAeegv40lZ7cpSFB8f67oFpk-ME";
    $chat_id = "-789733819";

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>