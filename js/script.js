var logoUrls = [
	"https://kassiesa.net/uefa/clubs/images/Manchester-City.png",
	"https://kassiesa.net/uefa/clubs/images/Chelsea.png",
	"https://kassiesa.net/uefa/clubs/images/Liverpool.png",
	"https://kassiesa.net/uefa/clubs/images/Manchester-United.png",
	"https://kassiesa.net/uefa/clubs/images/Arsenal.png",
	"https://kassiesa.net/uefa/clubs/images/Tottenham-Hotspur.png",
	"https://kassiesa.net/uefa/clubs/images/FC-Barcelona.png",
	"https://kassiesa.net/uefa/clubs/images/Atl%E9tico-Madrid.png",
	"https://kassiesa.net/uefa/clubs/images/Real-Madrid.png",
	"https://kassiesa.net/uefa/clubs/images/Juventus.png",
	"https://kassiesa.net/uefa/clubs/images/Paris-Saint-Germain.png",
	"https://kassiesa.net/uefa/clubs/images/Internazionale.png",
	"https://kassiesa.net/uefa/clubs/images/Napoli.png"
];
var clubs = [
	"Man City (Man Blue)",
	"Chelsea (London FC)",
	"Liverpool",
	"Manchester United (Man Red)",
	"Arsenal",
	"Tottenham Hotspur (North East London)",
	"Barcelona",
	"Aletico Madrid (KB Red White)",
	"Real Madrid (MD White)",
	"Juventus (PM Black White)",
	"Paris Saint-Germain",
	"Inter Milan (Internazionale)",
	"Napoli"
];
var img = document.getElementById("spin_img");
var txt = document.getElementById("content");
var prev_id = -1;
var resuld_id = 0;

img.addEventListener("click", clickImg, false);
img.addEventListener("animationend", showResult, false);


function clickImg(e) {
  img.className = "enable";

  img.src = "assets/vtcc.png";
  txt.innerHTML = "Choosing Team";

  if (e) e.preventDefault();
}

function showResult(e) {
  img.className = "";

  do {
    result_id = Math.floor(Math.random() * 13);
  } while (result_id === prev_id);
  console.log(prev_id, result_id);

  img.src = logoUrls[result_id];
  txt.innerHTML = clubs[result_id];
  prev_id = result_id;
  
  if (e) e.preventDefault();
};

