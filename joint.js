var Joint = function(opts) {

	var five = require('johnny-five'),
		//lowest hand postion tracked
		minPos = opts.minPos,
		// highest position tracked
		maxPos = opts.maxPos,
		// servo instance that handle this joint
		_servo = new five.Servo({
			pin: opts.pin,
			range: opts.range
		});

	
	var _move = function(pos, constraint) {
		var angle;
		if (constraint) {
			pos = constraint(pos);
		}
		angle = _scale(pos);
		_servo.move(angle);
	};

	
	var _scale = function(pos) {
		// if current hand/finger position is outside the tracked range
		// get the nearest tracked limit
		if (pos<minPos) {
			pos = minPos;
		}
		else if (pos>maxPos) {
			pos = maxPos;
		}
		return Math.floor(five.Fn.map(pos, minPos, maxPos, _servo.range[0], _servo.range[1]));
	};

	return {
		servo: _servo,
		move: _move,
		scale: _scale
	};
};

module.exports = Joint;
