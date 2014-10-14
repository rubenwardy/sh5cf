// Initialise Game
function init()
{

}

// Update and draw the game state
function tick(ce, c, dtime)
{
	//c.fillStyle = "black";
	//engine.draw_fps();
	
	
	// Draw Example
	c.font = "35px Arial";
	c.textAlign = "center";
	c.fillText("Simple HTML5 Canvas Framework", ce.width/2, 100);
	c.fillText("created by rubenwardy", ce.width/2, 150);
}