$(document).ready(function () {
	$( '.nav-item' ).click( function(){
		var which = $(this).data('val');
		if ( !$('.screenout').hasClass('show') )
			$('.screenout').addClass('show')
		if ( $('#'+which).hasClass( 'show' ) )
			$('#'+which).removeClass( 'show' )
		else
			{
				$('.popdown').removeClass( 'show' )
				$('#'+which).toggleClass( 'show' )
			}
	});
	$( '.screenout' ).click( function(){
		$('.popdown').removeClass( 'show' )
		$('.screenout').removeClass( 'show' )
	});
});