const batu = document.querySelector('.batu');
const gunting = document.querySelector('.gunting');
const kertas = document.querySelector('.kertas');
const skorUser = document.querySelector('.user');
const skorLawan = document.querySelector('.lawan');
const ulang = document.querySelector('.ulang');

const lawan = document.querySelector('.komputer');
const text = document.querySelector('.text');
console.log(text);

let bilangan;
let hasil;
let hasilSebelumnya;
let untukSkor;
let skorUntukUser = 0;
let skorUntukLawan = 0;

function Random(){
	bilangan = Math.random();
	
	if(hasilSebelumnya == bilangan){
		Random();
	}
	hasilSebelumnya = bilangan;

	if (bilangan < 0.4) {
		hasil = 'Gunting';
	}else if(bilangan < 0.8){
		hasil = 'Batu';
	}else{
		hasil = 'Kertas';
	}
	return hasil;
}

function batu1(){
	let hasilLawan = Random();
	
	if(hasilLawan == 'Gunting'){
		untukSkor = 'Anda Menang';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src ="img/gunting.png">';
	}else if(hasilLawan == 'Batu'){
		untukSkor = 'Hasil Seri';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/batu.png">';
	}else{
		untukSkor = 'Anda Kalah';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/kertas.png">';
	}
	
	if (untukSkor == 'Anda Menang') {
		skorUntukUser++;
		skorUser.innerHTML = skorUntukUser;
	}else if(untukSkor == 'Anda Kalah'){
		skorUntukLawan++;
		skorLawan.innerHTML = skorUntukLawan;
	}
	console.log(hasilLawan);
}

function gunting1(){
	let hasilLawan = Random();
	
	if(hasilLawan == 'Gunting'){
		untukSkor = 'Hasil Seri';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src ="img/gunting.png">';
	}else if(hasilLawan == 'Batu'){
		untukSkor = 'Anda Kalah';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/batu.png">';
	}else{
		untukSkor = 'Anda Menang';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/kertas.png">';
	}
	
	if (untukSkor == 'Anda Menang') {
		skorUntukUser++;
		skorUser.innerHTML = skorUntukUser;
	}else if(untukSkor == 'Anda Kalah'){
		skorUntukLawan++;
		skorLawan.innerHTML = skorUntukLawan;
	}
	console.log(hasilLawan);
}


function kertas1(){
	let hasilLawan = Random();
	
	if(hasilLawan == 'Gunting'){
		untukSkor = 'Anda Kalah';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src ="img/gunting.png">';
	}else if(hasilLawan == 'Batu'){
		untukSkor = 'Anda Menang';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/batu.png">';
	}else{
		untukSkor = 'Hasil Seri';
		text.innerHTML = untukSkor;
		lawan.innerHTML = '<img src = "img/kertas.png">';
	}
	
	if (untukSkor == 'Anda Menang') {
		skorUntukUser++;
		skorUser.innerHTML = skorUntukUser;
	}else if(untukSkor == 'Anda Kalah'){
		skorUntukLawan++;
		skorLawan.innerHTML = skorUntukLawan;
	}
	console.log(hasilLawan);
}

function ulangi(){
	skorUser.innerHTML = 0;
	skorLawan.innerHTML = 0;
	text.innerHTML = '';
	lawan.innerHTML = '';
}

batu.addEventListener('click', batu1);
gunting.addEventListener('click', gunting1);
kertas.addEventListener('click', kertas1);
ulang.addEventListener('click', ulangi);