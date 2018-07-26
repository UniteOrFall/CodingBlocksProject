var dec;
var i;
// Create a new path and style it:
var isRunning = false;
var istime;
var deleteCandy = false;
var init1=40;
var k=0;
var upMovement=true;
var isPlane=false;
var planePos;
var gameEnd = false;
var shootPosition;
var widthPosition;
var meteorTime;
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
            gameEnd=false;
            return dec;
        }
	},
	w: {
		sound: new Howl({
  		src: ['C/clay.mp3']
		}),
		color: '#2ecc71',
        shape: function () {
            var rectangle = new Rectangle(new Point(view.center+300), new Point(view.center)-300);
            var path = new Path.Rectangle(rectangle);
            path.strokeColor = this.color;
            path.name = "square";
            path.rotate(45);
            path.strokeWidth = 20;
            decagon.push(path);
            return path;
		}

	},
    e: {
        sound: new Howl({
            src: ['A/confetti.mp3']
        }),
        color: ['#3498db','red','grey','green','orange'],
        shape: function () {
            for (var i = 0; i < 20; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: this.color[i%5],
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
  		src: ['C/corona.mp3']
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
            istime=new Date().getTime();
            return path;
        }
	},
		t: {
		sound: new Howl({
  		src: ['C/dotted-spiral.mp3']
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
  		src: ['C/flash-1.mp3']
		}),
		color: ['#16a085','green','red','orange','yellow','blue','bisque'],
        shape: function () {
			console.log(view.center.x);
            var dec = new Path.Circle(view.center, 300);
            dec.fillColor = this.color;
            dec.name="circles";
            decagon.push(dec);
            istime=new Date().getTime();
            for (var i = 0; i < 40; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: this.color[i%7],
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
  		src: ['C/flash-2.mp3']
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
  		src: ['C/flash-3.mp3']
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
			src: ['C/glimmer.mp3']
		}),
		color: '#8e44ad',
		shape: function(){
            var deca = new Path.RegularPolygon(new Point(view.center+20, view.center), 15, 200);
            deca.fillColor = this.color;
            deca.selected = true;
            deca.name="changing";
            decagon.push(deca);
		}
	},
	p: {
		sound: new Howl({
  		src: ['C/moon.mp3']
		}),
		color: '#2c3e50',
        shape:function(){
		    if(isPlane===false) {
                var raster = new Raster('plane');
                raster.position = new Point(45, view.size.height / 2);
                console.log(raster.height);
                raster.rotate(90);
                raster.name = "plane";
                console.log(raster.position.y);
                decagon.push(raster);
                planePos = decagon.length;
                isPlane = true;
                gameEnd = true;
            }
        }
	},
	a: {
		sound: new Howl({
  		src: ['C/pinwheel.mp3']
		}),
		color: '#f1c40f',
        shape:function(){
		    init1=40;
            var myPath = new Path();
            myPath.strokeColor = 'pink';
            myPath.add(new Point(40,view.size.height/2+40));
            myPath.name = 'zigzag';
            myPath.strokeWidth=20;
            myPath.selected=true;
            decagon.push(myPath);

        }
	},
	s: {
		sound: new Howl({
  		src: ['C/piston-1.mp3']
		}),
		color: '#e67e22',
        shape:function(){
		    if(isPlane) {
                var raster = new Raster('shooter');
                raster.position = planePos;
                raster.rotate(90);
                console.log(raster.position.x);
                raster.name = "shooter";
                decagon.push(raster);
            }
        }
	},
		d: {
            sound: new Howl({
                src: ['C/piston-2.mp3']
            }),
            color: '#e74c3c',
            shape: function () {
                if (isPlane) {
                    var raster = new Raster('meteor');
                    raster.position = new Point(view.size.width,(Math.random()*view.size.height));
                    raster.scale = Math.random();
                    raster.rotate(90);
                    console.log(raster.position.x);
                    meteorTime=new Date().getTime();
                    raster.name = "meteor";
                    decagon.push(raster);
                }
            }
        },
	f: {
		sound: new Howl({
  		src: ['C/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['C/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['C/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['C/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['C/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['C/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['C/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['C/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['C/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['C/veil.mp3']
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
			src: ['C/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['C/moon.mp3']
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
                if(decagon[i].area<1){
                    remov(i,decagon[i]);
                }
            } else if(decagon[i].name==='square2'){
                decagon[i].strokeColor.hue += 5;
                decagon[i].rotate(3);
                if(new Date().getTime() - istime >=1000) {
                    remov(i, decagon[i]);
                }
                // decagon[i].scale(0.9);

			}
            	else if(decagon[i].name==='candy'){
                decagon[i].position.x += view.size.width / 20;
            }else if(decagon[i].name==='square3'){
                decagon[i].fillColor.hue += 5;
                decagon[i].rotate(3);
                decagon[i].scale(0.9);
            }
            else if(decagon[i].name==='candyup') {
                if (deleteCandy == true) {
                	remov(i,decagon[i]);
                	deleteCandy=false;
                } else {
                    if (decagon[i].position.x < 1000) {
                        decagon[i].position.x += Math.random() * 40;
                    } else {
                        decagon[i].position.x -= Math.random() * 40;
                    }
                    decagon[i].position.y -= Math.random() * 40;
                }
            }
            else if(decagon[i].name==='circles') {
                decagon[i].fillColor.hue += 5;
                console.log(new Date().getTime()-istime);
                if(new Date().getTime() - istime >=1000) {
                    remov(i, decagon[i]);
                    deleteCandy=true;
                }
            }
                else if(decagon[i].name==='circle'){
                decagon[i].fillColor.hue += 5;
                decagon[i].scale(0.9);
                decagon[i].rotate(3);
                if(decagon[i].area<1){
                    remov(i,decagon[i]);
                }
			}else if(decagon[i].name==='stripes'){

                    decagon[i].position.x -= 20;
			}else if(decagon[i].name==='stripes2'){

                decagon[i].position.x += 20;
            }else if(decagon[i].name==='changing'&& isRunning===false){
                setTimeout(function(){
                    isRunning=false;
				},70);
                segmentRemover(decagon[i]);
                if(decagon[i].segments.length==0){
                	decagon.splice(i,1);
				}
        		isRunning=true;
        		console.log(isRunning);
			}else if(decagon[i].name==='zigzag'){
        	    init1+=120;
                    if(k%2==0){

                        decagon[i].add(new Point(init1,view.size.height/2-160));


                        k++;
                    }else{
                        decagon[i].smooth();
        	            decagon[i].add(new Point(init1,view.size.height/2+160));
        	            k++;
                        decagon[i].smooth();

                    }
                    //Portion For the Plane not as i wanted due to time strain but will become better after some works
                //Flow as i wanted but i want it to be more key press centric.
            }else if(decagon[i].name==='plane'){
        	    if(gameEnd===false){
        	        isPlane=false;
        	        remov(i,decagon[i]);
                }
        	    if(!upMovement) {
                    decagon[i].position.y += 3;
                    planePos = (decagon[i].position+10);
                }else if(upMovement){
                    decagon[i].position.y -= 3;
                    planePos = (decagon[i].position-10);
                }
                if(decagon[i].position.y>view.size.height){
                    upMovement=true;
                }else if(decagon[i].position.y<10){
        	        console.log(decagon[i].position.y);
        	        upMovement=false;
                }

                //This Portion is For controlling the bullets plane shoots
            }else if(decagon[i].name==='shooter'){
                    shootPosition = decagon[i].position.y;
                    widthPosition = decagon[i].position.x;
                    console.log(widthPosition);

                decagon[i].position.x +=10;
                if(decagon[i].position.x>view.size.width){
                    remov(i,decagon[i]);
                }
                //Meteors Showers
            }else if(decagon[i].name==='meteor'){
                decagon[i].position.x-=6;
                if((new Date().getTime()-meteorTime)>=1000){
                    data.d.shape();
                }
                if((shootPosition>(decagon[i].position.y-(decagon[i].height/2))&&shootPosition<(decagon[i].position.y+(decagon[i].height/2)))&&widthPosition>decagon[i].position.x)
                {
                    remov(i,decagon[i]);
                    }
                if(decagon[i].position.x<0||isPlane===false)
                {
                    remov(i,decagon[i]);
                }
            }

        }


        // for (i = 0; i < decagon.length; i++) {
        //     decagon[i].fillColor.hue += 5;
        //     decagon[i].rotate(3);
        //     decagon[i].scale(0.9);
        // }

}
function segmentRemover(dec) {
		dec.removeSegment(0);
		isRunning=false;
		dec.fillColor.hue+=10;

}
function remov(index,dec){

  		decagon.splice(i,1);
    dec.remove();
    if(isPlane===true){
        shootPosition=0;
        widthPosition=0;
    }
}
