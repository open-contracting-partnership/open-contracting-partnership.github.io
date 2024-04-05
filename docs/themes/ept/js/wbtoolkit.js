(function($){
$(document).ready(function(){
	
	/*Page Initialization*/
	$(".is-active").parent().addClass("active");
	
	/*Bug 62037*/
	if ($(".path-personalinfo").length > 0 ||  $(".path-requirements-results-view").length > 0) {
	    $('a[href$="/requirements"]').parent().addClass("active");
	}
	
/*	
 * Moved to eproc.js
 * 
 * $(".mandatory").prop("checked", true);
	$(".mandatory").attr("disabled",true);
	
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").prop("checked", true);
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").attr("disabled", true);
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").parents('label').addClass("mandatorylabel");
	$(".mandatory").parents('label').addClass("mandatorylabel");
	
	$(".main:checked").parents('.checkbox').next('.collapse').collapse('toggle');
	
	On Click Behaviour
	$(".main").change(function(e) {
		var target = $(e.target);
		target.parents('.checkbox').next('.collapse').find(".sub").prop("checked", this.checked);
		target.parents('.checkbox').next('.collapse').find(".submandatory").attr("disabled", true);
		target.parents('.checkbox').next('.collapse').find(".submandatory").parents('label').addClass("mandatorylabel");
		target.parents('.checkbox').next('.collapse').collapse('toggle');
	});
	
	$(".sub").click(function(e) {
		var target = $(e.target);
		if((target.parents('.collapse').find(':checked').length)===0)
		{
			var parentReq=target.parents('.collapse').prev('.checkbox').find('input');
			if ($(parentReq).hasClass("mandatory")==false) {
				target.parents('.collapse').collapse('toggle');
				$(parentReq).prop("checked", this.checked);
			}
		}
	});*/
	
	/*Submit Behaviour
	$(".e-tools-form-submit").click(function(e) {
		$(".mandatory").attr("disabled", false);
		$(".submandatory").attr("disabled", false);
	});
	*/
	
	/*
	 * $('a[data-toggle="collapse"]').on('click',function(){
		
		var objectID=$(this).attr('href');
		
		if($(objectID).hasClass('in')){
			$(objectID).collapse('hide').find('.panel-collapse').each(function(){
				$(this).collapse('hide');
			});
		}
		
		else{$(objectID).collapse('show');}
	});
	*/
	
	
	/*//var agent = $('#UserAgent').val(navigator.userAgent);
	if (navigator.userAgent.match(/Mac OS/)) {
		$(".results-view-footer a").attr('target','_blank');
	}
	*/
});
})(jQuery)