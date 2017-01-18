(function() {
	//var Images = document.querySelectorAll('.image-holder'),
	//	Headings = document.querySelector('.heading'),
	//	SubHeadings = document.querySelector('.main-copy h2'),
	//	SeasonText = document.querySelector('.main-copy p'),
	//	appliedClass;

		var $Images = $('.image-holder'),
			$Headings = $('.heading'),
			$SubHeadings = $('.main-copy h2'),
			$SeasonText = $('.main-copy p'),
			appliedClass;

		function changeElements() {

			$Headings.removeClass(appliedClass);
			$SubHeadings.removeClass(appliedClass);

			appliedClass = event.currentTarget.id;

			$Headings.addClass(appliedClass);
			$SubHeadings.addClass(appliedClass);
			
			$SubHeadings.text(dynamicContent[event.currentTarget.id].headline);
			$SeasonText.text(dynamicContent[event.currentTarget.id].text);
		}

  		$Images.click(function() {
  			changeElements();
  		});

		/*[].forEach.call(Images, function(image) {
			image.addEventListener('click', changeElements, false);
		});*/

			$SubHeadings.text(dynamicContent['spring'].headline);
			$SeasonText.text(dynamicContent['spring'].text);
			$Headings.addClass('spring');

			/*SubHeadings.text = (dynamicContent['spring'].headline);
			SeasonText.text = (dynamicContent['spring'].text);
			Headings.addClass('spring');*/

})();