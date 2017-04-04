$(document).ready(function(){
	$('body').prepend('<div id="fb-root"></div>');

	$.ajax({
		url: 'index.php?route=extension/module/facebook_message',
		success: function(html) {
			$('#ocx-facebook-message').remove();
			
			$('body').prepend(html);
		}
	});
	
	$('body').on('click', function(e){
		if ($(e.target).hasClass('fbm-trigger')) {
			FBMShowMessageArea();
		} else if ($('#ocx-facebook-message-chat').hasClass('fbm-opened')) {
			FBMHideMessageArea();
		}
	});
});

function FBMShowMessageArea() {
	var display_position = $('#ocx-facebook-message').attr('class').replace('wait-', '');
	
	$('#ocx-facebook-message #ocx-facebook-message-icon').hide();
	$('#ocx-facebook-message #ocx-facebook-message-chat').addClass('fbm-opened ' + display_position);
}

function FBMHideMessageArea() {
	var display_position = $('#ocx-facebook-message').attr('class').replace('wait-', '');
	
	$('#ocx-facebook-message #ocx-facebook-message-icon').show();
	$('#ocx-facebook-message #ocx-facebook-message-chat').removeClass('fbm-opened').removeClass(display_position);
}