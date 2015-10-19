var five = require('johnny-five'),
    webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    board = new five.Board(),
    LeapFrame = require('./leapFrame'),
    Joint = require('./joint'),
    frame,
    l=0,
    r=0,
    i=0,
    yoyo=0,
    lolol=0;

board.on('ready', function() {

  var leftWheel = new Joint({
 		minPos: 75,
//		minPos: 0,
		maxPos: 99,
		pin: 4,
		range: [0,95]
  });

  var rightWheel = new Joint({
		minPos: 75,
		maxPos: 99,
		pin: 5,
		range: [92,180]
  });

  var armX = new Joint({
		minPos: -200,
		maxPos: 200,
		pin: 10,
		range: [50,180]
  });

  var armY1 = new Joint({
		minPos: -800,
		maxPos: 100,
		pin: 11,
		range: [35,195]
  });

  var armY2 = new Joint({
		minPos: -500,
		maxPos: 300,
		pin: 7,
		range: [70,179]
  });

  
  var armZ = new Joint({
		minPos: -500,
		maxPos: 500,
		pin: 8,
		range: [0,170]
  });

 var cameraX = new Joint({
		minPos: -100,
		maxPos: 100,
		pin: 12,
		range: [2,178]
  });

 var cameraY = new Joint({
		minPos: -100,
		maxPos: 100,
		pin: 3,
		range: [2,150]
  });

 var armClamp = new Joint({
		minPos: -220,
		maxPos: -120,
		pin: 13,
		range: [50,190]
  });

 var armPalmNormal = new Joint({
		minPos: -70,
		maxPos: 70,
		pin: 2,
		range: [50,190]
  });



/*0.0719124,0.735422,-0.673783 front
-0.0879156,-0.80906,-0.581113 back
0.925638,0.372126,-0.0686825 right
0.631396,-0.75253,-0.187185 left*/
/*
-0.558665,0.142084,-0.817133 front
-0.713378,0.142103,-0.68622 left
-0.31722,0.159431,-0.934855 right*/

  ws.on('message', function(data, flags) {
    i++;
			
    if (i%3 === 0) {    // track only 40fps
      frame = new LeapFrame(data);
/*console.log(frame.valid);
//console.log(frame.hands);
console.log(frame.handsl);
//console.log(frame.pointables);
console.log(frame.pointablesl);*/
   if(frame.valid ==1 && frame.hands && frame.hands.length==1 && ((frame.pointables && frame.pointables.length<5 && frame.pointables.length>2)||(frame.fingers && frame.fingers.length<5 && frame.fingers.length>2))) {

		if ((frame.palmNormal.y*-100) <= 99.000 && (frame.palmNormal.y*-100) >98.000){
			yoyo=75;lolol=99;}
		if ((frame.palmNormal.y*-100) <= 98.000 && (frame.palmNormal.y*-100) >97.000){
			yoyo=76;lolol=98;}
		if ((frame.palmNormal.y*-100) <= 97.000 && (frame.palmNormal.y*-100) >96.000){
			yoyo=77;lolol=97;}
		if ((frame.palmNormal.y*-100) <= 96.000 && (frame.palmNormal.y*-100) >95.000){
			yoyo=78;lolol=96;}
		if ((frame.palmNormal.y*-100) <= 95.000 && (frame.palmNormal.y*-100) >94.000){
			yoyo=79;lolol=95;}
		if ((frame.palmNormal.y*-100) <= 94.000 && (frame.palmNormal.y*-100) >93.000){
			yoyo=80;lolol=94;}
		if ((frame.palmNormal.y*-100) <= 93.000 && (frame.palmNormal.y*-100) >92.000){
			yoyo=81;lolol=93;}
		if ((frame.palmNormal.y*-100) <= 92.000 && (frame.palmNormal.y*-100) >91.000){
			yoyo=82;lolol=92;}
		if ((frame.palmNormal.y*-100) <= 91.000 && (frame.palmNormal.y*-100) >90.000){
			yoyo=83;lolol=91;}
		if ((frame.palmNormal.y*-100) <= 90.000 && (frame.palmNormal.y*-100) >89.000){
			yoyo=84;lolol=90;}
		if ((frame.palmNormal.y*-100) <= 89.000 && (frame.palmNormal.y*-100) >88.000){
			yoyo=85;lolol=89;}
		if ((frame.palmNormal.y*-100) <= 88.000 && (frame.palmNormal.y*-100) >87.000){
			yoyo=86;lolol=88;}
		if ((frame.palmNormal.y*-100) <= 87.000 && (frame.palmNormal.y*-100) >86.000){
			yoyo=87;lolol=87;}
		if ((frame.palmNormal.y*-100) <= 86.000 && (frame.palmNormal.y*-100) >85.000){
			yoyo=88;lolol=86;}
		if ((frame.palmNormal.y*-100) <= 85.000 && (frame.palmNormal.y*-100) >84.000){
			yoyo=89;lolol=85;}
		if ((frame.palmNormal.y*-100) <= 84.000 && (frame.palmNormal.y*-100) >83.000){
			yoyo=90;lolol=84;}
		if ((frame.palmNormal.y*-100) <= 83.000 && (frame.palmNormal.y*-100) >82.000){
			yoyo=91;lolol=83;}
		if ((frame.palmNormal.y*-100) <= 82.000 && (frame.palmNormal.y*-100) >81.000){
			yoyo=92;lolol=82;}
		if ((frame.palmNormal.y*-100) <= 81.000 && (frame.palmNormal.y*-100) >80.000){
			yoyo=93;lolol=81;}
		if ((frame.palmNormal.y*-100) <= 80.000 && (frame.palmNormal.y*-100) >79.000){
			yoyo=94;lolol=80;}
		if ((frame.palmNormal.y*-100) <= 79.000 && (frame.palmNormal.y*-100) >78.000){
			yoyo=95;lolol=79;}
		if ((frame.palmNormal.y*-100) <= 78.000 && (frame.palmNormal.y*-100) >77.000){
			yoyo=96;lolol=78;}
		if ((frame.palmNormal.y*-100) <= 77.000 && (frame.palmNormal.y*-100) >76.000){
			yoyo=97;lolol=77;}
		if ((frame.palmNormal.y*-100) <= 76.000 && (frame.palmNormal.y*-100) >75.000){
			yoyo=98;lolol=76;}
		if ((frame.palmNormal.y*-100) <= 75.000 && (frame.palmNormal.y*-100) >74.000){
			yoyo=99;lolol=75;}
		if ((frame.palmNormal.y*-100) <= 74.000 && (frame.palmNormal.y*-100) >0.000){
			yoyo=99;lolol=75;}
		if ((frame.palmNormal.y*-100) <= 1000.000 && (frame.palmNormal.y*-100) >99.000){
			yoyo=99;lolol=75;}
	
	

//		console.log("in main app func");
//		rightWheel.move((frame.palmNormal.y*-100));
		rightWheel.move(lolol+l);
//		console.log((frame.palmNormal.y)*-25+75);
		
console.log(yoyo);console.log(lolol);
//        	leftWheel.move((frame.palmNormal.y*-100));
        	leftWheel.move(yoyo-r);

//		leftWheel.move((frame.palmPosition.y)-45);
//		console.log((frame.palmNormal.y*-100)+25);
//console.log(frame.palmNormal.x*50);
l=0;r=0;
		if((frame.palmNormal.x*100)>30){
			  l=((frame.palmNormal.x*50)-15);//console.log(l);
			  r=0;
					
		}
		if((frame.palmNormal.x*100)<-30){
			  r=((-50*frame.palmNormal.x)-15);//console.log(r);
			  l=0;
		}
/*		if(frame.palmDirection.x>10){
			  l=frame.palmDirection.x;
			  r=-1*(frame.palmDirection.x);
		}
		if(frame.palmDirection.x<-10){
			  l=-1*(frame.palmDirection.x);
			  r=frame.palmDirection.x;
		}*/
//console.log((frame.palmNormal.y*-100+r)+" \n"+(frame.palmNormal.y*-100+l)+"\n\n");
    }
	if(frame.valid && frame.hands && frame.hands.length ==1 && ((frame.pointables && frame.pointables.length>4)||(frame.fingers && frame.fingers.length>4))){
		
		armX.move((-1*frame.palmPosition.x)) ;
		armY1.move((-1*frame.palmPosition.y));
		armY2.move((-1*frame.palmPosition.y));
//		armY3.move(frame.palmPosition.y);
		armZ.move(frame.palmPosition.z);
		armClamp.move((frame.deltaHandFinger.y-150));
		armPalmNormal.move((frame.palmNormal.x*100));
//console.log((frame.palmNormal.x*100));
	}

/*	if(frame.valid && frame.hands && frame.hands.length ==1 && ((frame.pointables && frame.pointables.length===5)||(frame.fingers && frame.fingers.length===5))){
		
//		armX.move((-1*frame.palmPosition.x)) ;
//		armY1.move((-1*frame.palmPosition.y));
//		armY2.move((-1*frame.palmPosition.y));
//		armY3.move(frame.palmPosition.y);
//		armZ.move(frame.palmPosition.z);
//		armClamp.move((-1*frame.palmPosition.y));
//		console.log((-1*frame.palmPosition.y));
//		console.log((frame.deltaHandFinger.y-150));
		armClamp.move((frame.deltaHandFinger.y-150));
	}*/

	if(frame.valid && frame.hands && frame.hands.length ==1 && frame.pointables && frame.pointables.length==1){
		cameraX.move(frame.deltaHandFinger.x);
		cameraY.move((-1*frame.deltaHandFinger.y));
	}
		i=0;
	}
	});
});
