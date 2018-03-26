
$('#my-box').mouseenter(function() {
	$('#my-box').css('color', 'red')
})

$('#my-box').mouseleave(function() {
	$('#my-box').css('background', 'blue')
})

// $(this) when applying to a series of elements

$('.my-list-item').click(function() {
	//wrapping this in a jquery selector. this is backed into vanilla JS
	$(this).addClass('active')
	//addClass is a jquery method
	//$(this).css('color', 'red')
 })

//adding elements that are dynamically added

/*why quotes around click when it's part of the jquery library? 
It can't exist alone, only when the jquery method is called
siblings is a jquery method - isblings are elements that are right next
door to one another
*/


//.on(event, element, call-back function)
$(document).on('click', '.my-list-item', function () {
	$(this).addClass('active')
	$(this).siblings().removeClass('active')
})