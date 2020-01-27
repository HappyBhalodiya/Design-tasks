
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}


function myFunction1(){
	var x=document.getElementById("search").value;
	$('#search')[0].value;
	
	if(x.length > 0){
		$("body").append($(
			`  <div class="alert alert-success alert-dismissible fade in">
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			<strong>Success!</strong> This alert box could indicate a successful or positive action.
			</div>`))
	}
	else{
		$("body").append($(
			` <div class="alert alert-danger alert-dismissible fade in">
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			<strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
			</div>`))
	}
}





function myfunction(x) {
	x.style.background = "#ccc";
}
function blurFunction() {

	document.getElementById("search").style.background = "yellow";
}


$(document).ready(function(){
	

	$('.tab-pane').mouseenter(function () {
		var demo_height = $(this).find('.img_box').height();
		var image_height = $(this).find('.img_container > img').height() - demo_height;
		if (image_height > 0) {
			$(this).find('.img_container').css('top', -(image_height));
		} else {
			$(this).find('.img_container').css('top', 0);
		}
	});
	$('.tab-pane').mouseleave(function () {
		$('.img_container').css('top', 0);
	});  
});

	