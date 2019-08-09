<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
header('Content-Type: text/html; charset=utf-8');





$doc = $_REQUEST['doc'];


	
		$html=$doc;

		$fields = array
		(
			'html' 	=> $html
			);



$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://addons.amulex.ru/pdf/generate' );
curl_setopt( $ch,CURLOPT_POST, true );
//curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, $fields  );
$result = curl_exec($ch );
curl_close( $ch );


$filename = "doc.pdf";

$handle = fopen($filename, 'w+');


if (is_writable($filename)) {

  
	if (!$handle = fopen($filename, 'w+')) {
		echo "Не могу открыть файл ($filename)";
		exit;
	}

    // Записываем $somecontent в наш открытый файл.
	if (fwrite($handle, $result) === FALSE) {
		echo "Не могу произвести запись в файл ($filename)";
		exit;
	}

	close($handle);

	} else {
		echo "Файл $filename недоступен для записи";
	}



?>