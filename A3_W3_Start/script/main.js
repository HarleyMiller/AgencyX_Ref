(function() {
	var Images = document.querySelectorAll('.image-holder'),
		Headings = document.querySelector('.heading'),
		SubHeadings = document.querySelector('.main-copy h2'),
		SeasonText = document.querySelector('.main-copy p'),
		appliedClass;

		function changeElements() {

			Headings.classList.remove(appliedClass);
			SubHeadings.classList.remove(appliedClass);			

			appliedClass = this.id;

			Headings.classList.add(this.id);
			SubHeadings.classList.add(this.id);
			
			
			SubHeadings.firstChild.nodeValue = dynamicContent[this.id].headline;
			SeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		}

		[].forEach.call(Images, function(image) {
			image.addEventListener('click', changeElements, false);
		});

			SubHeadings.firstChild.nodeValue = dynamicContent[this.id].headline;
			SeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
			Headings.classList.add(this.id);

})();