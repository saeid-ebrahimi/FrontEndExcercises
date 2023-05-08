<?php 
	if(isset($_POST['name']))
	{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$url = $_POST['url'];
		$comments = $_POST['comments'];
		$submit = $_POST['send'];
		
		if(!empty($name) && !empty($email) && !empty($comments))
		{
			// Same regular expression that the jQuery Validator plugin uses...
			$re_email = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
			
			if(preg_match($re_email, $email))
			{
				echo "<h2> Successfully Submitted Data</h2>";
				echo "<p>";
				echo $name . "<br>";
				echo $email . "<br>";
				echo $url . "<br>";
				echo $comments . "<br>";
				echo $submit . "<br>";
				echo "</p>";
			}
			else { echo "you did not format your email properly"; }
		}
		
		else { echo "You did not fill in the required fields"; }
	
	}
	else
	{
		echo "<h2>No data returned</h2>";
	}
?>