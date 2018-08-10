<?php
if(isset($_GET['next'])){
	$url = 'https://youandkrishna.blogspot.com/feeds/posts/default?alt=json&max-results=2&start-index=' . $_GET['next'];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);
	echo curl_exec($ch);
	curl_close($ch);
}
?>