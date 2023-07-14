// your code here
let heading=document.getElementById('url')
let button=document.getElementById('button')
let name=document.getElementById('name')
let year=document.getElementById('year')
button.addEventListener('click',update)
function update(event){
	event.preventDefault();
	if(name.value=='' && year.value!=''){
		heading.innerHTML=`https://localhost:8080/?${year.name}=${year.value}`
	}
	else if(name.value!='' && year.value==''){
		heading.innerHTML=`https://localhost:8080/?${name.name}=${name.value}`
	}
	else if(name.value!='' && year.value!=''){
		heading.innerHTML=`https://localhost:8080/?${name.name}=${name.value}&${year.name}=${year.value}`
	}
	else{
		heading.innerHTML=`https://localhost:8080/`}
}
