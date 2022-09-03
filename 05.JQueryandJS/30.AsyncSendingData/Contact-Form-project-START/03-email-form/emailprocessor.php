<?php 
	
	if(isset($_POST['name']))
	{
		
		$name = $_POST['name'];
		$email = $_POST['email'];
		$comment = $_POST['comment'];
		
		if(!empty($name) && !empty($email) && !empty($comment))
		{
			// regular expression for email
			$re_email = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
			
			if(preg_match($re_email, $email))
			{
				
$message = "Name: $name, 
Email: $email,  
Comments: $comment";
				//actually sending mail is commented out to prevent spam		
				//send_mail($email, $message);
				$myData->result = "success";
				$myJSON = json_encode($myData);
				echo $myJSON;
			}
			else {
				$myData->result = "emailfail";
				$myJSON = json_encode($myData);
				echo $myJSON;
			}
		}
		
		else {
			$myData->result = "fieldfail";
			$myJSON = json_encode($myData);
			echo $myJSON;
		}
	
	}
	
	function send_mail($email, $message)
	{
		$to = "youremail@somewhere.com";
		$from = $email;
		$subject = "Mail from webform on your website";
		$headers = "From: {$email}" . "\r\n" . 'Reply-To:' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		// actually sends mail in PHP 
		mail($to, $subject, $message, $headers);
	}

?>