$(document).ready(function () {
	// main ribbon menu
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

	// tab option
	$( '.tab-header li' ).click( function(){
		var which = $(this).data('target');
		if ( !$('#'+which).hasClass( 'show' ) )
		{
			$( '.tab-header li' ).removeClass( 'selected' )
			$(this).addClass( 'selected' )
			$( '.tab-content .tab' ).removeClass( 'show' )
			$('#'+which).addClass( 'show' )
		}
	});
});