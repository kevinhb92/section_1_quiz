function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(0, 0, 50);

	// draw the floor and trees (make a loop to sett up the number of trees)
	// x = number of trees
	fill(0, 40, 25);
	for (var x = 0; x < 10; x++) {
		triangle((x * 64) - 50, 360, (x * 64) + 32, 200, (x * 64) + 114, 360);
	}


	fill(0, 80, 50);
	rect(0, 290, 640, 360);

	// draw a UFO
	fill(100, 100, 100);
	ellipse(mouseX, mouseY - 60, 100, 50);
	ellipse(mouseX, mouseY - 80, 50, 60);

	//draw windows for UFO
	fill(75, 75, 75);
	ellipse(mouseX - 50, mouseY - 60, 10, 10);
	ellipse(mouseX - 25, mouseY - 60, 10, 10);
	ellipse(mouseX, mouseY - 60, 10, 10);
	ellipse(mouseX + 25, mouseY - 60, 10, 10);
	ellipse(mouseX + 50, mouseY - 60, 10, 10);

	//make UFO to shine
	if (mouseIsPressed) {
		fill(random(0, 255), random(0, 255), 0, 255);
		ellipse(mouseX - 50, mouseY - 60, 10, 10);
		ellipse(mouseX - 25, mouseY - 60, 10, 10);
		ellipse(mouseX, mouseY - 60, 10, 10);
		ellipse(mouseX + 25, mouseY - 60, 10, 10);
		ellipse(mouseX + 50, mouseY - 60, 10, 10);
		ellipse(mouseX, 340, 60, 10);
		ellipse(mouseX, mouseY - 40, 30, 5);
	}
}
