Simple HTML5 Canvas Framework
=============================

A simple, non bloated way to make HTML5 games.

License: LGPL 3.0 or later.

Created by rubenwardy.

Please tell me if you use these. I'd like to know. (Not a legal requirement, though.)

```html
<script src="https://rubenwardy.github.io/sh5cf/scripts/engine.js">
```

Example
-------

```javascript
var game = {};
// define game functions and classes



//
// Initialise Game
//
function init()
{
	game.map = game.getScene("scene1");
	engine.onKeyUp = function(e) {
		if (e.keyCode == 113) {
			$("#debug").toggle();
		}
	};
}


//
// Tick: update world state, draw world
//
function tick(ce, c, dtime)
{
	// Do movement
	var pos = {x: game.player.x, y: game.player.y};
	var speed = 300;
	if (getKey(68) || getKey(39))
		pos.x += speed * dtime;
	if (getKey(65) || getKey(37))
		pos.x -= speed * dtime;
	if (getKey(87) || getKey(38))
		pos.y -= speed * dtime;
	if (getKey(83) || getKey(40))
		pos.y += speed * dtime;
		
	// Collision Detection
	if (!collidesAt(pos.x, pos.y)) {
		game.player.x = pos.x;
		game.player.y = pos.y;
	}
	
	// Draw scene
	for (var i = 0; i < game.map.draw.length; i++) {
		var item = game.map.draw[i];
		if ($.type(item.img) === "string") {
			if (item.img[0] == "#") {
				var img = $(item.img)[0];
				var dpos = pxToScr({x: item.x, y: item.y});
				c.drawImage(img, dpos.x, dpos.y);
			}
		} else {
			var dpos = pxToScr({x: item.x, y: item.y});
			c.drawImage(item.img, dpos.x, dpos.y);			
		}
	}
	
	// Draw player
	c.fillStyle = "green";
	c.fillRect((ce.width - PLAYER_W)/2, (ce.height - PLAYER_H)/2, PLAYER_W, PLAYER_H);
	
	// Debug box
	$("#debug").html("<h3>Debug</h3><p>FPS: " + engine.fps.fps + 
			 "<br />Player: (" + Math.floor(game.player.x) + ", " + Math.floor(game.player.y) + ")" + 
			 "<br />Scene: " + game.map.name + "</p>");
}
```
