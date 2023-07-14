// your code here
let heading=document.getElementById('url')
let button=document.getElementById('button')
button.addEventListener('click',update)
function update(event){
	event.preventDefault();
	heading.innerHTML="Ananthan"
}
