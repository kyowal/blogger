<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test Page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="javascript.js"></script>
</head>
<body>
<input type="hidden" id="nextload" value="1">
<div class="container">
	<div class="col-xs-3">
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">
			  <p>Cras auto will happen : <span>testing-url-data-set</span></p>
		  </li>
		  <li class="list-group-item">
			  <p>Cras auto will happen : <span>testing-url-data-set</span></p>
		  </li>
		</ul>
	</div>
	<div class="col-xs-9">	
		<div class="input-group margin">
			<span class="input-group-addon">Subject</span>
			<input id="title" type="text" class="form-control" name="title" placeholder="Additional Info Subject">
		</div>
		
		<div class="input-group margin">
			<span class="input-group-addon">Path</span>
			<input id="url" type="text" class="form-control" name="url" placeholder="Additional Info Path">
		</div>		
		
		<div class="input-group margin text-center col-xs-12">
			<button type="button" id="update" name="update" class="btn btn-default">Update Action</button>
		</div>
		
		<ul class="pager">
		  <li class="previous"><a href="#">Previous</a></li>
		  <li class="next"><a href="#">Next</a></li>
		</ul>
	</div>
</div>
</body>
</html>