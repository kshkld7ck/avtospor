<?php


$creds = array(
    'authheader'=> "Basic QWRtaW46MTIzNDU=",
);

$BASE_URL = 'https://devlegal.intraservice.ru/api';

function api_request($data='', $url='', $auth='', $type='', $file='', $file_type='', $file_name=''){

	$ch  = curl_init($url);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HEADER, 0);

	if($type=='post') curl_setopt($ch,CURLOPT_POST, true );
	if($type=='patch') curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PATCH");
	if($type=='put') curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    $headers = array(
        'Content-Type: application/json',
        'Authorization: Basic QWRtaW46MTIzNDU='
    );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);


	if($file){
		$headers = array('Content-Type: multipart/form-data',
                                 'Authorization: Basic QWRtaW46MTIzNDU=');
		$file = curl_file_create($file, $file_type, $file_name);
		curl_setopt( $ch,CURLOPT_POSTFIELDS, array($file));
	}
	elseif($data!='') curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $data)  );
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	$result = curl_exec($ch);
	$error  = curl_error($ch);
	curl_close($ch);

	$result = json_decode($result, true);
	return $result;

}

if($_REQUEST['a'] == 'create_task') {
    $url = 'https://devlegal.intraservice.ru/api/task';
    $data = array(
        'Name' => ''.$_REQUEST['title'].'',
        'ServiceId' =>  $_REQUEST['serviceid'],
        'Description' => ''.$_REQUEST['description'].'',
        'StatusId' => $_REQUEST['status'],
        'PriorityId' => 9,
        'TypeId' => 1004
    );
    $res = api_request($data, $url, $creds['authheader'], 'post');
    print json_encode($res);
}
elseif($_REQUEST['a'] == 'append_files') {
    $url = 'https://devlegal.intraservice.ru/api/TaskFile';
    $arr = array();
    for($i=0; $i<count($_FILES['files']['name']); $i++) {
    	$r = api_request('', $url, '', 'post', $_FILES['files']['tmp_name'][$i], $_FILES['files']['type'][$i], $_FILES['files']['name'][$i]);
    	$arr[$i] = $r['FileTokens'];
    }
    $e_arr = implode(",", $arr);
    $url_to_append = 'https://devlegal.intraservice.ru/api/task/'.$_REQUEST['id'];
    $d = array('FileTokens' => $e_arr);
    $final = api_request($d, $url_to_append, '', 'put');
    print json_encode($final);
}
elseif ($_REQUEST['a'] == 'add_comment') {
        $url = 'https://devlegal.intraservice.ru/api/task/'.$_REQUEST['task_id'];
        $d = array("Comment" => "Ответ:".$_REQUEST['message']);
        $f = api_request($d, $url, '', 'put');
        print json_encode($f);

}

?>