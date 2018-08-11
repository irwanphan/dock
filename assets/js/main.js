$(document).ready(function () {
	regisNewTabElement();
});
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

// click on main menu to open a new tab
$( '.popdown li a' ).click( function(){
	$('.popdown').removeClass( 'show' );
	$('.screenout').removeClass( 'show' );
	var which = $(this).attr('id');
	var str = $(this).children('small').text();
	$( '.tab-header li' ).removeClass( 'selected' );
	$( '.tab-header' ).append( '<li class="selected" data-target="'+which+'">'+str+'<i>cancel</i></li>' );
	$( '.tab-content > .tab' ).removeClass( 'show' );

	createNewTab( which );
	regisNewTabElement();
});

function createNewTab( menu_element_identifier )
{
	var url = $( '#' + menu_element_identifier ).data( 'url-fetch' );

	$.ajax({
		url: url,
		type: 'get',
		data: {},
		success: function( response )
		{
			var content = response.table;
			$( '.tab-content' ).append( '<div class="tab show" id="tab-content-'+menu_element_identifier+'">'+content+'</div>' );
		},
		error: function( response )
		{
			console.log( 'Error' );
			console.log( response );
		}
	});
}

function regisNewTabElement()
{
	// tab option
	$( '.tab-header li' ).on('click', function(){
		var which = $(this).data('target');
		if ( !$('#tab-content-'+which).hasClass( 'show' ) )
		{
			$( '.tab-header li' ).removeClass( 'selected' );
			$(this).addClass( 'selected' );
			$( '.tab-content > .tab' ).removeClass( 'show' );
			$('#tab-content-'+which).addClass( 'show' );
		}
	});

	// close a tab, if the tab was selected, select previous tab
	$( '.tab-header li > i' ).click( function(){
		var which = $(this).parent().data('target');
		if ( $('#tab-content-'+which).hasClass( 'show' ) ) {
			$(this).parent().prev().addClass('selected');
			var next = $(this).parent().siblings('.selected').data('target');
			$('#tab-content-'+next).addClass( 'show' );
		}
		$(this).parent().remove();
		$( '.tab-content > #tab-content-'+which).remove();
	});
}

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

// tab sub option
$( '.tab-sub-header li' ).click( function(){
	var divid = $(this).parent().parent().parent().attr('id');
	var which = $(this).data('target');
	if ( !$('#tab-content-'+which).hasClass( 'show' ) )
	{
		$( '#'+divid+' .tab-sub-header li' ).removeClass( 'selected' );
		$(this).addClass( 'selected' );
		$( '#'+divid+' .tab-sub-content .tab' ).removeClass( 'show' );
		$('#tab-content-'+which).addClass( 'show' );
	}
});
