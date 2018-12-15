jQuery(document).ready(function() {
	jQuery("#fyn_clear_searchform").click(function(event) {
		event.preventDefault();
		jQuery(':input',"#fyn_searchform").not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
	});
});

