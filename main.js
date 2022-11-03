canvas = document.getElementById("canvas");
ctx = canvas.getContext ("2d");

color = "#7090ff"

backgrondImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_width = 75;
greencar_height = 100;

greencar_x =5;
greencar_y =225;

function add() {
backgrond_imgTag = new Image();
backgrond_imgTag.onload = uploadBackgrond;
backgrond_imgTag.src = backgrond_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;





}

function uploadBackground() {
    ctx.drawImage(backgrond_imgTag, 0, 0, canvas.width, canvas.heght)

}

function uploadGreenCar() {
    ctx.drawImage(greencar_imgTag, 0, 0, canvas.width, canvas.heght)

	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");

		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_y >=0){
        greencar_y - 10
        uploadBackground();
        uploadGreenCar();
    }
}

function down()
{
    if(greencar_y >=0){
        greencar_y + 10
        uploadBackground();
        uploadGreenCar();
    }
}

function left()
{
    if(greencar_x >=0){
        greencar_x - 10
        uploadBackground();
        uploadGreenCar();
    }
}

function right()
{
    if(greencar_x >=0){
        greencar_x + 10
        uploadBackground();
        uploadGreenCar();
    }

}