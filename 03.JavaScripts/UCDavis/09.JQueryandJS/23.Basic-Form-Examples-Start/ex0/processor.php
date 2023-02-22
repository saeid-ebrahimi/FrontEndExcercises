<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Form Processor</title>
</head>

<body>

    <h1>Processed Data</h1>
    
	<?php 
    
    if( isset( $_POST['comments'] ) )
    {
        $name = $_POST['name'];
		$email = $_POST['email'];
		$url = $_POST['url'];
		$comments = $_POST['comments'];
		$submit = $_POST['send'];
                 
		echo "<p>Name: $name</p>";
		echo "<p>Email: $email</p>";
		echo "<p>URL: $url</p>";
		echo "<p>Comments: $comments</p>";
		echo "<p>$submit</p>";
    }
    ?>

</body>
</html>

