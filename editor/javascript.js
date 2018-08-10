$(document).ready(function(){
	load();
	
    function load(){
		$index = $("#nextload").val();
		$url = 'curl.php?next=' + $index;
		$.ajax({
			dataType: "html",
			url: $url,
			success: function($response){
					var response = JSON.parse($response);
					var list = response.feed.entry;
					$.each( list, function( i, row ){
						console.log(row);
						var subject  = row.title.$t;
						var path	 = row.link[4].href;
						path = path.substring(path.lastIndexOf("/") + 1);
						var body 	 = row.content.$t;
						return false;
					});
					
					$("#nextload").val();
				}
		});
	}
});