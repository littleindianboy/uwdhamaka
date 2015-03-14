$(document).ready(function() {




    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        // anchors:['intro'],
        navigation: false,
        navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: false,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : true,
        sectionsColor : ['rgba(30, 30, 30, 1)'],
        // paddingTop: '3em',
        paddingBottom: '2em',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });
	

	$(function() {
		$("#title, #date, #logowrapper, #buybutton, #location, #socialmedia").anima({y: 0, opacity: 0});

		$("#logowrapper").delayAnima(400).anima({y: 0, opacity: 1}, 1000);
		
		$("#title").delayAnima(1000).anima({y:0, opacity: 1}, 800, {complete: function() {
			$("#location").anima({opacity: 1}, 1000)
			$("#date").delayAnima(1000).anima({opacity: 1}, 500);
			$("#buybutton").delayAnima(2000).anima({opacity: 1}, 500);
            $("#socialmedia").delayAnima(2500).anima({opacity: 1}, 500);
		}});
		// $("#title, #date, #logowrapper").anima({y: 0, opacity: 1}, 1000);
	});




});