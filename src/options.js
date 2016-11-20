$(document).ready(function() {
	for(var i = 0; i < modules.length; i++) {
		console.log(modules[i].id);
		$('.moduleList').append(`
			<li>
				<input type="checkbox" attr-module="${modules[i].id}">
				<span>${modules[i].name}</span>
				<span class="shortcut">${modules[i].shortcut}</span>
			</li>
		`);
		if(localStorage[modules[i].id] !== "false") {
			localStorage[modules[i].id] = "true";
		}
		$('.moduleList :last-child input').prop('checked', localStorage[modules[i].id] == "true");
	}

	$('input').on('change', function() {
		var self = $(this);
		localStorage[self.attr('attr-module')] = self.prop('checked');
	});
});