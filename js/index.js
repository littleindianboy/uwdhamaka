$(document).ready(function() {


	

	$(function() {
		$("#title, #date, #logowrapper, #tickets, #location, #socialmedia").anima({y: 0, opacity: 0});

		$("#logowrapper").delayAnima(400).anima({y: 0, opacity: 1}, 1000);
		
		$("#title").delayAnima(1000).anima({y:0, opacity: 1}, 500, {complete: function() {
			$("#location").anima({opacity: 1}, 500)
			$("#date").delayAnima(500).anima({opacity: 1}, 500);
			$("#tickets").delayAnima(1000).anima({opacity: 1}, 500);
            $("#socialmedia").delayAnima(1500).anima({opacity: 1}, 500);
		}});
		
	});




});