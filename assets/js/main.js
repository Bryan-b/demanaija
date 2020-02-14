"use strict";

// Open & Close Aside Navigation

$(function(){
	$(document).on('click', ".open-nav", function(){
		$(".responsive-nav-container").addClass('active');
	})

	$(document).on("click", ".close-nav, .close-list", function() {
		$(".responsive-nav-container").removeClass("active");
	});
})



let previews = {};
document.querySelectorAll(".entry-thumbs > div").forEach(
	function(element) {
		previews[element.getAttribute('data-entry-thumb')] = element;
	}
)
document.querySelectorAll('.entries-list div h1').forEach(
	function(element) {
		element.addEventListener('mouseover', function(e) {
			let selectedIndex = element.getAttribute("data-entry-link");

			document.querySelector('.entries-list .active').classList.remove("active");
			element.childNodes[0].classList.add("active");

			document.querySelector('.entry-thumbs .active').classList.remove("active");
			previews[selectedIndex].classList.add("active");
		})
	}
)
