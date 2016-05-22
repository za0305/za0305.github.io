;

var time = 0;
var run = false;
var check = true;

var startButton = document.getElementById('button_start');
startButton.addEventListener('click', start);

document.getElementById('button_clear').addEventListener('click', resetTimer);


function resetTimer () {
		clearTimeout(clockTimer);
		run = false;
		check = true;
		startButton.innerHTML='Start';
		document.getElementById('stopwatch').innerHTML='00:00:00:000';
}

function increment () {
			var nowDate = new Date();
  		time = nowDate.getTime() - startTime.getTime();
			var tenths = time % 1000; 
			time -= tenths; 
			tenths = Math.floor(tenths);
  			time = Math.floor (time / 1000);
  			var seconds = time % 60; 
  			time -= seconds;
  			time = Math.floor (time / 60);
  			var minutes = time % 60; 
  			time -= minutes;
  			time = Math.floor (time / 60);
  			var hours = time % 60;
 			if (minutes < 10) {
 				minutes = '0' + minutes;
 			}
 			if (seconds < 10) {
 				seconds = '0' + seconds;
 			}
 			if (tenths < 10) {
 				tenths = '0' + tenths;
 			}
      if (tenths < 100) {
        tenths = '0' + tenths;
      }
 			if (hours < 10) {
 				hours = '0' + hours;
 			}

document.getElementById('stopwatch').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + tenths;
if (check == true) {
	clockTimer = setTimeout('increment ()', 1);
	}
}

function start () {
    if (run == false) {
    	startTime = new Date();
    	run = true;
    	increment ();
    	startButton.innerHTML = 'Pause';
    }
	 else {
	 	if (check == true) {
  		check = false;
  		pauseTime = new Date();
   		startButton.innerHTML = 'Resume';
  	} else {
  		check = true;
  		startTime = new Date (startTime.getTime() + (new Date()).getTime() - pauseTime.getTime());
  		increment ();
  		}
	}
};
