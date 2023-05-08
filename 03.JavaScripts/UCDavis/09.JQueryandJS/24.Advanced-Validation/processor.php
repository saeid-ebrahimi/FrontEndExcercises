<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Awesome Form Processor Page</title>
</head>

<body>

<h1>Processed Data</h1>

<?php
	if(isset($_POST['send']))
	{
		
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$contacttype = $_POST['contacttype'];
		$cheeses = $_POST['cheese'];
		$cheesetype = $_POST['cheesetype'];
		$comments = $_POST['comments'];
		
		if(!empty($name) && !empty($email) && !empty($phone) && !empty($cheeses) && !empty($cheesetype))
		{
			
			
			$re_email = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
			
			// for handling the array
			$cheese_list ="";
			
			foreach($cheeses as $eachcheese)
			{
				$cheese_list .= $eachcheese . ", ";
			}
			
			//cuts off the final ', '
			$cheese_list = substr($cheese_list, 0, -2);
			
			if(preg_match($re_email, $email))
			{
				echo "<p>name: $name</p>";
				echo "<p>email: $email</p>";
				echo "<p>phone: $phone</p>";
				echo "<p>Contact type:$contacttype</p>";
				echo "<p>Cheese List: $cheese_list</p>";
				echo "<p>Cheese Type: $cheesetype</p>";
				echo "<p>Comments: $comments</p>";
				
			}
			else { echo "you did not format your email properly"; }
		}
		
		else { echo "You did not fill in the required fields"; }
	
	}
?>

</body>
</html>