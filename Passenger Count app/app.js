let coumt=1;
function increase(){
	let result=coumt++
	document.getElementById('count-el').innerHTML=result;

}

function declear(){

	document.getElementById('count-el').innerHTML=0;
	coumt=1;
}