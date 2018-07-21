var dec;
var i;
// Create a new path and style it:


// Add 5 segment points to the path spread out
// over the width of the view:
    // Uncomment the following line and run the script again
    // to smooth the path:
    // path.smooth();
var maxPoints = new Point(view.size.width, view.size.height);
var data = {
	q: {
		sound: new Howl({
  		src: ['A/bubbles.mp3']
		}),
		color: '#1abc9c',
		shape: function (){
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var dec = new Path.Circle(point, 500);
            dec.fillColor = this.color;
            dec.name="circle";
            decagon.push(dec);
            return dec;
        }
	},
	w: {
		sound: new Howl({
  		src: ['A/clay.mp3']
		}),
		color: '#2ecc71',
        shape: function () {
            var rectangle = new Rectangle(new Point(view.center+40), new Point(view.center)-100);
            var path = new Path.Rectangle(rectangle);
            path.strokeColor = this.color;
            path.name = "square";
            path.rotate(45);
            path.strokewidth = 40;
            decagon.push(path);
            return path;
		}

	},
    e: {
        sound: new Howl({
            src: ['A/confetti.mp3']
        }),
        color: '#3498db',
        shape: function () {
            for (var i = 0; i < 20; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: this.color,
                    strokeColor: 'black'
                });
                path.fillColor.hue += i;
                path.name = 'candy';
                decagon.push(path);

            }
            console.log(path.name);
            return path;
        }
    },
	r: {
		sound: new Howl({
  		src: ['A/corona.mp3']
		}),
		color: '#9b59b6',
        shape: function () {
			for (var i=0;i<10;i++) {
                var rectangle = new Rectangle(new Point(view.center + 200), new Point(view.center) - 150);
                var path = new Path.Rectangle(rectangle);
                path.strokeColor = this.color;
                path.name = "square2";
                path.rotate(5 * i);
                decagon.push(path);
            }
            return path;
        }
	},
		t: {
		sound: new Howl({
  		src: ['A/dotted-spiral.mp3']
		}),
		color: '#34495e',
            shape: function(){
                for (var i=0;i<10;i++) {
                    var randomPoint = Point.random();
                    var point = maxPoints * randomPoint;
                    var rectangle = new Rectangle(point, new Point(500,200));
                    var path = new Path.Rectangle(rectangle);
                    path.fillColor = this.color;
                    path.name = "square3";
                    path.rotate(5 * i);
                    decagon.push(path);
                }
                return path;
            }
            },
	y: {
		sound: new Howl({
  		src: ['A/flash-1.mp3']
		}),
		color: '#16a085',
        shape: function () {
			console.log(view.center.x);
            var dec = new Path.Circle(view.center, 500);
            dec.fillColor = this.color;
            dec.name="circles";
            decagon.push(dec);
            for (var i = 0; i < 20; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: this.color,
                    strokeColor: 'black'
                });
                path.fillColor.hue += i;
                path.name = 'candyup';
                decagon.push(path);

            }
            console.log(path.name);
            return path;
        }
	},
	u: {
		sound: new Howl({
  		src: ['A/flash-2.mp3']
		}),
		color: '#27ae60',
		shape: function(){
			var z = 317;
			for(var i=0;i<3;i++) {
				console.log((z+(34*i)))
                var dec = new Path.Rectangle(new Point(view.size.width, (317+i*34)), new Point(view.size.width - 400, (334+i*34)));
                dec.fillColor = "white";
                dec.name = "stripes";
                decagon.push(dec);
            }

		}
	},
	i: {
		sound: new Howl({
  		src: ['A/flash-3.mp3']
		}),
		color: '#2980b9',
        shape: function(){
            for(var i=0;i<3;i++) {
                var dec = new Path.Rectangle(new Point(0, (334+i*34)), new Point( 400, (351+i*34)));
                dec.fillColor = "white";
                dec.name = "stripes2";
                decagon.push(dec);
            }

        }
	},
	o: {
		sound: new Howl({
			src: ['A/glimmer.mp3']
		}),
		color: '#8e44ad',
	},
	p: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['A/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['A/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['A/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['A/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['A/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['A/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['A/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['A/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['A/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['A/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['A/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['A/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['A/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['A/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['A/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
var decagon=[];
function onKeyDown(event) {
    // When a key is pressed, set the content of the text item:
            data[event.key].sound.play();
            dec = data[event.key].shape();

}

function onKeyUp(event) {
    // When a key is released, set the content of the text item:
    console.log( 'The ' + event.key + ' key was released!');
    console.log(i);
}
function onFrame(event) {
        for (i = 0; i < decagon.length; i++) {
        	if(decagon[i].name==='square') {
                decagon[i].strokeColor.hue += 5;
                decagon[i].scale(0.99);
                decagon[i].rotate(3);
            } else if(decagon[i].name==='square2'){
                decagon[i].strokeColor.hue += 5;
                decagon[i].rotate(3);
                // decagon[i].scale(0.9);

			}
            	else if(decagon[i].name==='candy'){
                decagon[i].position.x += view.size.width / 20;
            }else if(decagon[i].name==='square3'){
                decagon[i].fillColor.hue += 5;
                decagon[i].rotate(3);
                decagon[i].scale(0.9);
            }
            else if(decagon[i].name==='candyup'){
        	    if(decagon[i].position.x<1000) {
                    decagon[i].position.x +=Math.random() * 20;
                }else{
                    decagon[i].position.x -= Math.random() * 20;
                }
                decagon[i].position.y -=  Math.random() * 20;
            }
            else if(decagon[i].name==='circles'){
                decagon[i].fillColor.hue += 5;
        	}
                else if(decagon[i].name==='circle'){
                decagon[i].fillColor.hue += 5;
                decagon[i].scale(0.9);
                decagon[i].rotate(3);
			}else if(decagon[i].name==='stripes'){

                    decagon[i].position.x -= 20;
			}else if(decagon[i].name==='stripes2'){

                decagon[i].position.x += 20;
            }

        }


        // for (i = 0; i < decagon.length; i++) {
        //     decagon[i].fillColor.hue += 5;
        //     decagon[i].rotate(3);
        //     decagon[i].scale(0.9);
        // }

}