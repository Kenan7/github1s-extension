chrome.action.onClicked.addListener((tab) => {
	window
		.open(
			window.location.href.replace(/github(1s)?.com/, function(match, p1) {
				return p1 ? 'github.com' : 'github1s.com';
			}),
			'_blank'
		)
		.focus();
});
