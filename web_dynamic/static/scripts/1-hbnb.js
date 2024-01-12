$(document).ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dateset.name] = this.dataset.id;
		} else {
			delete amenities[this.dateset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	});
});
