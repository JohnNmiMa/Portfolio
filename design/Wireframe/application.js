$(document).ready(function() {
	$("span.wf1").click(function() {
		if ($('input#markupBox').is(':checked')) {
			$('#wf2mDiv').hide();
			$('#wf1mDiv').show();
		} else {
			$('#wf2Div').hide();
			$('#wf1Div').show();
		}
	});

	$("span.wf2").click(function() {
		if ($('input#markupBox').is(':checked')) {
			$('#wf1mDiv').hide();
			$('#wf2mDiv').show();
		} else {
			$('#wf1Div').hide();
			$('#wf2Div').show();
		}
	});

	$("input#markupBox").click(function() {
		if (($('#wf1Div').css('display') !== "none") ||
		    ($('#wf1mDiv').css('display') !== "none")) {
			$('#wf1Div, #wf1mDiv').toggle();
		} else if (($('#wf2Div').css('display') !== "none") ||
		           ($('#wf2mDiv').css('display') !== "none")) {
			$('#wf2Div, #wf2mDiv').toggle();
		}
	});
});
