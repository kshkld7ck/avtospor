<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
print var_dump($_POST);

$to = $_POST["target"];
$subject = "Обжалование постановления";
$replyto = $_POST["email"];
$html_content = "Обжалование постановления";
$from = $_POST["email"];
$from_name = $_POST["FIO"];
$files = array();
$files_len = count($_FILES["files"]["name"]);
for ($i=0; $i < $files_len; $i++) { 
    $files[] = array($_FILES["files"]['name'][$i], $_FILES["files"]["tmp_name"][$i],$_FILES["files"]["size"][$i] );
}


$result = multi_attach_mail($to,$subject,$replyto,$html_content,$from,$from_name,$files);


function multi_attach_mail($to, $subject,$replyto, $message, $senderMail, $senderName, $files){

    $from = $senderName." <".$senderMail.">"; 
    $headers = "From: $from";
    $headers .= "\nReply-To: ". $_POST['email']. "";
    // boundary 
    $semi_rand = md5(time()); 
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

    // headers for attachment 
    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

    // multipart boundary 
    $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
    "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n"; 

    // preparing attachments
    if(count($files) > 0){
        for($i=0;$i<count($files);$i++){
            if(is_file($files[$i][1])){
                $message .= "--{$mime_boundary}\n";
                $fp =    fopen($files[$i][1],"rb");
                $data =  fread($fp,filesize($files[$i][1]));
                fclose($fp);
                $data = chunk_split(base64_encode($data));
                $message .= "Content-Type: application/octet-stream; name=\"".basename($files[$i][0])."\"\n" . 
                "Content-Description: ".basename($files[$i][1])."\n" .
                "Content-Disposition: attachment;\n" . " filename=\"".basename($files[$i][0])."\"; size=".filesize($files[$i][1]).";\n" . 
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            }
        }
    }

    $message .= "--{$mime_boundary}--";
    $returnpath = "-f" . $senderMail;

    //send email
    $mail = mail($to, $subject, $message, $headers, $returnpath); 

    //function return true, if email sent, otherwise return fasle
    if($mail){ return true; } else { return false; }

}

?>