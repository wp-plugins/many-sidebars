jQuery(document).ready(function($) {

	// Writing the Panel
	
	var html  = '<div class="widgets-holder-wrap">'
		html += '<div class="sidebar-name"><div class="sidebar-name-arrow"><br></div><h3>Available Sidebars</h3></div>';
		html += '<div id="sidebar-many-sidebars" class="widgets-sortables ui-sortable" style="min-height: 50px; ">';
		html += '<div class="sidebar-description">';
		html += '<p class="description">Select one to edit:</p>';
		html += '<p><select id="many-sidebars"><option></option></select></p>';
		html += '<p><label><input id="many-sidebars-show-all" type="checkbox" value="1" /> Show All</label></p>';
		html += '</div></div></div>';

	$('#widgets-right').prepend(html);
	
	// Getting the Sidebars
	
	$('#widgets-right .widgets-holder-wrap').each(function(index) {
		var id = 'many-sidebars-panel-' + index;
		var name = $('.sidebar-name h3', this).text();
		
		if(index > 0) {
			$('select#many-sidebars').append(
				$('<option></option>').
				attr('value', id).
				text(name)
			);
			
			$(this).attr('id', id).hide();
		}
	});
	
	// Action
	
	$('select#many-sidebars').change(function() {
		$('input#many-sidebars-show-all').attr('checked', false);
		many_sidebars_show($('select#many-sidebars option:selected').attr('value'));
	});
	
	$('input#many-sidebars-show-all').click(function() {
		if($(this).attr('checked'))
			many_sidebars_show('all');
		else
			many_sidebars_show($('select#many-sidebars option:selected').attr('value'));
	});
	
	// Functions
	
	many_sidebars_show = function(id) {
		if(id == 'all') {
			$('#widgets-right .widgets-holder-wrap').each(function(index) {
				if(index > 0)
					$(this).addClass('closed').show();
			});
		} else {
			many_sidebars_hide();
			var elem = $('#'+id);
			elem.show();
			if(elem.hasClass('closed'))
				$('.sidebar-name', elem).click();
		}
	}
	
	many_sidebars_hide = function() {
		$('#widgets-right .widgets-holder-wrap').each(function(index) {
			if(index > 0)
				$(this).hide();
		});
	}
	
});
