;

  // CARUSEL


$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});

        // MENU


$(function() {

	var $menulinks = $('#menuLinks');
	var $submenu = $('.submenu');
	var $submenuLinks = $('#submenuLinks')
	var $subsubmenu = $('.subsubmenu')

	$menulinks.on('click', function(e) {
		$submenu.slideDown(1000);

	$submenu.on('mouseleave', function(e) {
		$submenu.hide();
		});
	});

	$submenuLinks.on('click', function(e) {
		$subsubmenu.slideDown(1000);

	$subsubmenu.on('mouseleave', function(e) {
		$subsubmenu.hide();
		});


	});

});


            // MENU CHANGE COLOR

$(function(){
	var $colorItem = $('.menu_item');
	var $colorSubItem = $('.submenu_item')
	var $colorSubSubItem = $(".subsubmenu_item")

	$colorItem.mouseenter( function () {
    	$(this).animate({
        	backgroundColor:'#ccc',
    	}, 500 );
	});
 
	$colorItem.mouseleave(function() {
    	$(this).animate({
        	backgroundColor:'#000000',
    	}, 500 );
	});


	$colorSubItem.mouseenter( function () {
    	$(this).animate({
        	backgroundColor:'#ccc',
    	}, 500 );
	});
 
	$colorSubItem.mouseleave(function() {
    	$(this).animate({
        	backgroundColor:'#2F4F4F',
    	}, 500 );
	});


	$colorSubSubItem.mouseenter( function () {
    	$(this).animate({
        	backgroundColor:'#ccc',
    	}, 500 );
	});
 
	$colorSubSubItem.mouseleave(function() {
    	$(this).animate({
        	backgroundColor:'#2F4F4F',
    	}, 500 );
	});
 

});

					// QUESTIONS


						// SELECT
$(function(){
  $('select').selectric();
});


                 // CHECKBOX

$(function(){
	$(".new_check").mousedown(function() {              

    	changeCheck($(this));
	});
 
	$(".new_check").each(function() {   

    	changeCheckStart($(this));
	});

	function changeCheck(el) {  
		var el = el,
	          input = el.find("input").eq(0);
	     if(!input.attr("checked")) {
	        el.css("background-position","0 -20px");  
	        input.attr("checked", true)
	    } else {
 	       el.css("background-position","0 0"); 
	        input.attr("checked", false)
	    }
	     return true;
	};

	function changeCheckStart(el) { 
		var el = el,
       	 input = el.find("input").eq(0);
      	if(input.attr("checked")) {
       	 el.css("background-position","0 -20px");    
      	  }
     	return true;
	};


});



    


     
 




    



