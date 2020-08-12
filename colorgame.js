var numSquares=6;
var colors=[];
var correctpick;

var sqaures=document.getElementsByClassName("square");
var h1display=document.querySelector("#color_display");
var change_h1_display=document.querySelector("#change_display");
var guess=document.querySelector("#guess");
var resetbtn=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");

init();

function init(){
	set_up_modes();	
	set_up_squares();	
	reset();
}

function set_up_modes(){
	for(var i=0; i<modebtn.length; i++){
		modebtn[i].addEventListener("click",function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares=this.textContent==="Easy"?3:6;
			reset();
		})
	}
}

function set_up_squares(){
	for(var i=0; i<sqaures.length; i++){
		sqaures[i].addEventListener("click",function(){
			var pickedcolor=this.style.background;
			if(pickedcolor==correctpick){
				guess.textContent="Correct Guess!!";
				changecolor(pickedcolor);
				resetbtn.textContent="Play Again";
			}
			else{
				this.style.background="#232323";
				guess.textContent="Wrong Guess. Try Again!!";
			}
		});
	}
}

function reset(){
	resetbtn.textContent="New Colors";
	change_h1_display.style.background="steelblue";
	guess.textContent="";
	colors=generate_color(numSquares);
    correctpick=pickColor();
    h1display.textContent=correctpick;
    for(var i=0; i<sqaures.length; i++){
    	if(colors[i]){
    		sqaures[i].style.display="block";
    		sqaures[i].style.background=colors[i];
    	}
		else{
			sqaures[i].style.display="none";
		}
	}
}

resetbtn.addEventListener("click",function(){
	reset();
});


function changecolor(color) {
	for(var i=0; i<sqaures.length; i++){
		sqaures[i].style.background=color;
	}
	change_h1_display.style.background=color;
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random]
}

function generate_color(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr[i]=generate_each_color();
	}
	return arr;
}

function generate_each_color(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")" ;
}