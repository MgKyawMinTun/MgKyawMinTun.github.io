const scriptURL = 'https://script.google.com/macros/s/AKfycbwj7wPnf5xyTI1st2jDmhK2OZvItgB7qfqrsUXVo-2O-1YF7K3B/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert("Thanks for Contacting me..! I Will Contact You Soon...") + document.getElementById('reset').reset())
	.catch(error => console.error('Error!', error.message))
});



///===================DOWNLOAD BUTTON================///
var download = document.getElementById('download');
download.addEventListener('click', downloadCall);

function downloadCall(){
	setTimeout(() => {
		Object.assign(document.createElement('a'),{
			href: 'https://drive.google.com/file/d/1bDhNCyQ37IBCPgRu1AO30EhQuoz49bl1/view?usp=sharing'
		}).click();
	}, 1000);
}




///===================PROJECT BTN====================///
var pj_btn = document.querySelector('.pj_btn');
pj_btn.addEventListener('click', newPage);

function newPage(){
	setTimeout(() => {
		Object.assign(document.createElement('a'),{
			href : 'projects.html'
		}).click();
	}, 2000);
}

