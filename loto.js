
random_mass=[];
ticket_mass=[];
winner=0;



nrblocks=document.getElementById('nrblocks');
console.log('Start!');
for (i =0; i <= 9; i++) {
	nrblocks.innerHTML+="<div id='"+i+"' class='col number'>"+i+"</div>"
}



function get_number (){

	if(ticket_mass.length!=0){
		if(random_mass.length<6){


			//console.log('Getting random number!');
			clear();


			randomNr=Math.floor(Math.random() *10);
			console.log(randomNr);
			document.getElementById('random_number').innerHTML=randomNr;
			document.getElementById(randomNr).style='background-color: orange';

			random_mass.push(randomNr);
			document.getElementById('r_number').innerHTML=random_mass;
			//console.log(random_mass);
		}
		else{
			// document.getElementById('result').innerHTML="Game over!";
			check(random_mass, ticket_mass);
		}


	}else{
		document.getElementById('result').innerHTML='Start new game!';
	}

}


function start(){
var uername = document.getElementById('name').value;
if(uername==""){
	alert('Please, enter your name')
}else{




	document.getElementById('t_number').innerHTML="";
	document.getElementById('r_number').innerHTML="";
	document.getElementById('random_number').innerHTML="";
	
	document.getElementById('result').innerHTML="";

clear();
ticket_mass=[];
random_mass=[];
for (var j = 0; j <= 5; j++) {
	t_number=Math.floor(Math.random() *10);
	ticket_mass.push(t_number);
}

//console.log(ticket_mass);
document.getElementById('t_number').innerHTML=ticket_mass;

	// kaip padaryti kad pasispaustu tik viena karta????
}
}

function clear(){

	for (var i = 0; i <= 9; i++) {
		document.getElementById(i).style = 'background-color: brown';
		
	}
}

function check(random_mass, ticket_mass){
winner=0;
				for (var t = 0; t < ticket_mass.length; t++) {
					for (var r = 0; r < random_mass.length; r++) {
						if (ticket_mass[t]==random_mass[r] && t==r) {
							winner++;
							//console.log("match " + ticket_mass[t]);
						}
					}
				};
				if (winner) {
					alert('You won '+(winner*10)+' EUR !');
					document.getElementById('result').innerHTML="You won "+(winner*10)+" EUR !";
	
				}
				else{
					alert('You loose!!!');
					document.getElementById('result').innerHTML="You loose!!!";
				}

var name=document.getElementById('name').value;

	$.post("http://localhost:8010/addloto?name="+name+"&amount="+winner);
	

}