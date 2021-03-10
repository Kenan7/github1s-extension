let actions = document.getElementsByClassName('pagehead-actions');

const html = `
    <button class="btn btn-outline mr-2" type="button" id="github1sCustomButton">
    <span>github1s</span>
    </button>
`;

actions[0].insertAdjacentHTML('beforebegin', html);

let theButton = document.getElementById('github1sCustomButton');

theButton.addEventListener('click', () => {
	window
		.open(
			window.location.href.replace(/github(1s)?.com/, function(match, p1) {
				return p1 ? 'github.com' : 'github1s.com';
			}),
			'_blank'
		)
		.focus();
});
