$(document).ready(function(){
var app = {};
(function(_self) { 
    _self.validateMobile = function(phone) {
		var re = /\d{5}([- ]*)\d{6}/;
		return re.test(String(phone).toLowerCase());
    };
	
	_self.validateEmail = function(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
    };
	
	_self.push = function(action, label, value, object, eventname) {
		action 	= (typeof action !== 'undefined') ? action : false;
		object 	= (typeof object !== 'undefined') ? object : 'Not Available';
		label 	= (typeof label !== 'undefined') ? label : 'Not Available';
		value 	= (typeof value !== 'undefined') ? value : 'Not Available';
		debug("Analytics Call: Action: " + action + " :: Object: " + object + " :: Event: " + eventname + " :: Label : " + label + " :: Value: " + value);
		switch(action){
			case 'pageview':
				ga('send', 'pageview', location.pathname);
			break;
			case 'gotoread':
				ga('send', 'event', 'Read More');
			break;
			case 'wpshare':
				ga('send', 'event', 'Soical Share', 'Whatsapp Share', 'Whatsapp Share - ' + label, 1);
			break;
			case 'openrelated':
				ga('send', 'event', 'Open Article', 'Open Related Article', 'Open Article - ' + label, 1);
			break;
			case 'homepage':
				ga('send', 'event', 'User Landing', 'Page Landing', 'Landing on Homepage', 1);
			break;
			case 'reading':
				ga('send', 'event', 'Post Reading', 'Single Post Reading', 'Single Post Read - ' + label, 1);
			break;
			case 'wpskip':
				ga('send', 'event', 'Subscription Popup', 'Whatsapp Subscription', 'Skip Wp Subscription', 1);
			break;
			case 'wpjoin':
				ga('send', 'event', 'Subscription Popup', 'Whatsapp Subscription', 'Wp Subscribed', 1);
			break;
			case 'adsclick':
				ga('send', 'event', 'Advertisement', label, value, 1);
			break;
			case 'skipads':
				ga('send', 'event', 'Skip Advertisement', label, value, 1);
			break;
		}
    };
	
	_self.loadMore = function($url, $isnext) {
		$isnext = ( $isnext == true )? true : false;
		$.ajax({
			dataType: "html",
			url: $url,
			success: function($response){
					if($isnext == true){
						$('#nextload').html($($response).find('._topcouter ul').html());
						$nextUrl 		= $($response).find('a.blog-pager-older-link').attr('href');
						$("#nextload").data('newurl', $nextUrl);
					}else{
						$('#previousload').html($($response).find('._topcouter ul').html());
						$previousUrl 	= $($response).find('a.blog-pager-newer-link').attr('href');
					}

					if($addView == true){
						$addView = false;
						$nextData = $("#nextload").html();
						if($nextData != ""){
							$("#currentload").html($nextData); // Load new posts in current view
							$("#nextload").html(""); // Make Clear Next Load
							initFixes(); // Call To Init for reintialize
						}else{
							loading(true);
						}
					}
			}
		});
    };
	
	_self.l = function() {
		
    };
	
	_self.l = function() {
		
    };
	
	_self.l = function() {
		
    };
	
	_self.l = function() {
		
    };
	
	

	
})(app);
});