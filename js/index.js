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
        fitToSection: true,
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
        paddingTop: '3em',
        paddingBottom: '2em',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
	

	$(function() {
		$("#title, #date, #logowrapper").anima({y: 100, opacity: 0});
		$("#logowrapper, #buybutton").anima({y: 0, opacity: 0});

		$("#logowrapper").anima({y: 0, opacity: 1}, 1000);
		
		$("#title, #date").delayAnima(1000).anima({y:0, opacity: 1}, 800, {complete: function() {
			$("#buybutton").anima({opacity: 1}, 500);
		}});
		// $("#title, #date, #logowrapper").anima({y: 0, opacity: 1}, 1000);
	});




});