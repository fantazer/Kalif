/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 

$(document).ready(function(){
	$('.main-left-menu').easytree();
	$('.main-left-menu-news').easytree();

	$('.write-review-arrow').backTop({
		'speed' : 100
	});

  $('.menu-cat-product').click(function(){
   	if ($(window).width() <= '480'){
			$('.main-left-menu').slideToggle()
		}
	})

  var topToggleMenu = function(){
	  $('.menu-cat-product-title').click(function(){
	  	$('.first-lvl').toggleClass('show');
	  })

		$('.first-lvl > .menu-cat-product-next').click(function(){
			$('.first-lvl').each(function(){
				$('.second-lvl').removeClass('show')
			})
			$(this).next('.menu-cat-product-sub-el').find('.second-lvl').addClass('show')
		})
		$('.second-lvl > .menu-cat-product-next').click(function(){
			$('.second-lvl').each(function(){
				$('.three-lvl').removeClass('show')
			})
			$(this).next('.menu-cat-product-sub-el').find('.three-lvl').addClass('show')
		})

		 $(document).click(function (event) {
	        if (
	        		$(event.target).closest('.menu-cat-product').length == 0 && $(event.target).attr('class') != 'menu-cat-product'
	             ) {
	            $('.first-lvl').removeClass('show');
	            $('.second-lvl').removeClass('show');
	            $('.three-lvl').removeClass('show');
	        }
	    });
	}

	if ($(window).width() <= '1100' || $(window).width() > '680'){
			topToggleMenu()
		}

	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;

    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;

    });

   if ($(window).width() <= '1100'){
   		$('.menu-cat-want').click(function(){
   			$('.menu-cat-want-text-wrap').toggleClass('show');
   		})
			 $(document).click(function (event) {
		        if (
		        		$(event.target).closest('.menu-cat-want').length == 0 && $(event.target).attr('class') != 'menu-cat-want-text-wrap'
		             ) {
		            $('.menu-cat-want-text-wrap').removeClass('show');
		        }
		    });
   	}

   	if ($(window).width() < '768' ){
	   	$('.main-left-sort-title').click(function(){
	   		$('.main-left-sort-block').slideToggle()
	   	})
   }
	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
</select>
*/

	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	$('#modal-registration').click(function(){
		$('.modal-registration').bPopup({
				closeClass:'modal-close',
				position:['auto','auto'], // position center
		}); 
	})
$('#viewed-product').click(function(){
		$('.modal-product').bPopup({
				closeClass:'modal-close',
				position:['auto','auto'], // position center
		}); 
	})
$('.product-right-count-right-basket').click(function(){
		$('.basket-commend').bPopup({
				closeClass:'modal-close',
				position:['auto','false'], // position center
		}); 
	})

$('.header-contact-phone').click(function(){
		$('.get-age').bPopup({
				closeClass:'get-age-true',
				position:['auto','auto'], // position center
		}); 
		console.log('asd');
	})

	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	$(".main-right-slider").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : true,
	 	singleItem:true,
	 	nav:false,
			
	 	}
	 ); 	
	$(".product-left-slide").owlCarousel({
	 	items : 1,

	 	pagination : false,
	 	autoPlay : true,
	 	singleItem:true,
	 	nav:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	 	}
	 ); 

	$(".modal-card-wraper").owlCarousel({
	 	responsive : {
	 		0:{
			 	items : 1
		 	},
		 	680:{
			 	items : 3
		 	}
		 	
	  },
	 	pagination : false,
	 	autoPlay : true,
	 	margin : 10,
	 	nav:false,
		nav:true,
		navText:['<div class="modal-product-nav-el">Предыдущие</div>','<div class="modal-product-nav-el">Следующие</div>']
	 	}
	 );

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
 $('.cabinet-tab').responsiveTabs({
        //rotate: false,
        //startCollapsed: 'accordion',
        //collapsible: 'accordion',
        //setHash: true,
        active: 0,
        scrollToAccordion: true
        
});
$('.about-tab').responsiveTabs({
         //rotate: false,
         //startCollapsed: 'accordion',
         //collapsible: 'accordion',
         //setHash: true,
         active: 0,
         scrollToAccordion: true
         
 });

$('.product-tab').responsiveTabs({
         //rotate: false,
         //startCollapsed: 'accordion',
         //collapsible: 'accordion',
         //setHash: true,
         active: 0,
         scrollToAccordion: true
         
 });




	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
})