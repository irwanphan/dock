$(document).ready(function () {
	// main ribbon menu
	$( '.nav-item' ).click( function(){
		var which = $(this).data('val');
		if ( !$('.screenout').hasClass('show') )
			$('.screenout').addClass('show');
		if ( $('#'+which).hasClass( 'show' ) )
			$('#'+which).removeClass( 'show' );
		else
			{
				$('.popdown').removeClass( 'show' );
				$('#'+which).toggleClass( 'show' );
			}
	});
	$( '.screenout' ).click( function(){
		$('.popdown').removeClass( 'show' );
		$('.screenout').removeClass( 'show' );
	});

	// tab option
	$( '.tab-header li' ).click( function(){
		var which = $(this).data('target');
		if ( !$('#'+which).hasClass( 'show' ) )
		{
			$( '.tab-header li' ).removeClass( 'selected' );
			$(this).addClass( 'selected' );
			$( '.tab-content > .tab' ).removeClass( 'show' );
			$('#'+which).addClass( 'show' );
		}
	});

	// add a close button to every tab header
	$( '.tab-header li' ).append( '<i>cancel</i>' );

	// add a new tab from input_pemaok
	$( 'button' ).click(function(){
		var which = $(this).data('target');
		var str = $(this).text();
		$( '.tab-header li' ).removeClass( 'selected' );
		$( '.tab-header' ).append( '<li class="selected" data-target="'+which+'">'+str+'<i>cancel</i></li>' );
		$( '.tab-content > .tab' ).removeClass( 'show' );
		$( '.tab-content' ).append( '<div class="tab show" id="'+which+'">qwertyuiop</div>' );
	});
	
	// close a tab, if the tab was selected, select previous tab
	$( '.tab-header li > i' ).click( function(){
		var which = $(this).parent().data('target');
		if ( $('#'+which).hasClass( 'show' ) ) {
			$(this).parent().prev().addClass('selected');
			var next = $(this).parent().siblings('.selected').data('target');
			$('#'+next).addClass( 'show' );
		}
		$(this).parent().remove();
		$( '.tab-content > .tab#'+which).remove();
	});

	// tab sub option
	$( '.tab-sub-header li' ).click( function(){
		var divid = $(this).parent().parent().parent().attr('id');
		var which = $(this).data('target');
		if ( !$('#'+which).hasClass( 'show' ) )
		{
			$( '#'+divid+' .tab-sub-header li' ).removeClass( 'selected' );
			$(this).addClass( 'selected' );
			$( '#'+divid+' .tab-sub-content .tab' ).removeClass( 'show' );
			$('#'+which).addClass( 'show' );
		}
	});

	
});