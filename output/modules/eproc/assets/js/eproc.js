/*
 * OLD JS
 * 
 * (function($){
	//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
	var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
			  videoSRC = videoSRC.replace("watch?v=", "embed/"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
})(jQuery)*/

(function($){
$(document).ready(function(){
	
	/*
	 * Module Selection Form Functionality
	 */
	$(".mandatory").prop("checked", true);
	$(".mandatory").attr("disabled",true);
	
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").prop("checked", true);
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").attr("disabled", true);
	$(".mandatory").parents('.checkbox').next('.collapse').find(".submandatory").parents('label').addClass("mandatorylabel");
	$(".mandatory").parents('label').addClass("mandatorylabel");
	
	$(".main:checked").parents('.checkbox').next('.collapse').collapse('toggle');
	
	/*On Click Behaviour*/
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
	});
	
	/*Results page*/
	$('a[data-toggle="collapse"]').on('click',function(){
		
		var objectID=$(this).attr('href');
		
		if($(objectID).hasClass('in')){
			$(objectID).collapse('hide').find('.panel-collapse').each(function(){
				$(this).collapse('hide');
			});
		}
		
		else{$(objectID).collapse('show');}
	});
	
	/*Remove Disabled status from mandatory module when submitting*/
	$(".e-tools-form-submit").click(function(e) {
		$(".mandatory").attr("disabled", false);
		$(".submandatory").attr("disabled", false);
	});
	
	/* Get iframe src attribute value i.e. YouTube video url
	and store it in a variable */
	var url = $("#wbVideo").attr('src');
					
	/* Assign empty url value to the iframe src attribute when
	modal hide, which stop the video playing */
	$("#youtubeModal").on('hide.bs.modal', function(){
		$("#wbVideo").attr('src', '');
	});
					
	/* Assign the initially stored url back to the iframe src
	attribute when modal is displayed again */
	$("#youtubeModal").on('show.bs.modal', function(){
		$("#wbVideo").attr('src', url);
		});
	
	if (navigator.userAgent.match(/Mac OS/)) {
		$(".results-view-footer a").attr('target','_blank');
	}
	
	});
})(jQuery)