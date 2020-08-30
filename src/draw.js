/*

pose {
	keypoints: [
		score:
		part: 
	]
}

*/


function drawBody(pose, canvas_context) {

	console.log("drawing body");

	var ctx = canvas_context;
	ctx.beginPath();
	ctx.strokeStyle = "#0000ff";

	
	// nose to left-eye
	ctx.moveTo(pose.keypoints[0].position.x, pose.keypoints[0].position.y);
	ctx.lineTo(pose.keypoints[1].position.x, pose.keypoints[1].position.y);
	// eyes
	ctx.moveTo(pose.keypoints[1].position.x, pose.keypoints[1].position.y);
	ctx.lineTo(pose.keypoints[2].position.x, pose.keypoints[2].position.y);
	// right-eye to nose
	ctx.moveTo(pose.keypoints[2].position.x, pose.keypoints[2].position.y);
	ctx.lineTo(pose.keypoints[0].position.x, pose.keypoints[0].position.y);
	
	// nose to ears
	ctx.moveTo(pose.keypoints[0].position.x, pose.keypoints[0].position.y);
	ctx.lineTo(pose.keypoints[3].position.x, pose.keypoints[3].position.y);
	
	ctx.moveTo(pose.keypoints[0].position.x, pose.keypoints[0].position.y);
	ctx.lineTo(pose.keypoints[4].position.x, pose.keypoints[4].position.y);

	// shoulders
	ctx.moveTo(pose.keypoints[5].position.x, pose.keypoints[5].position.y);
	ctx.lineTo(pose.keypoints[6].position.x, pose.keypoints[6].position.y);

	// left shoulder to hip
	ctx.moveTo(pose.keypoints[5].position.x, pose.keypoints[5].position.y);
	ctx.lineTo(pose.keypoints[11].position.x, pose.keypoints[11].position.y);

	// right shoulder to hip
	ctx.moveTo(pose.keypoints[6].position.x, pose.keypoints[6].position.y);
	ctx.lineTo(pose.keypoints[12].position.x, pose.keypoints[12].position.y);

	// hips
	ctx.moveTo(pose.keypoints[11].position.x, pose.keypoints[11].position.y);
	ctx.lineTo(pose.keypoints[12].position.x, pose.keypoints[12].position.y);


	// left arm
	// shoulder to elbow
	ctx.moveTo(pose.keypoints[5].position.x, pose.keypoints[5].position.y);
	ctx.lineTo(pose.keypoints[7].position.x, pose.keypoints[7].position.y);
	// elbow to wrist
	ctx.moveTo(pose.keypoints[7].position.x, pose.keypoints[7].position.y);
	ctx.lineTo(pose.keypoints[9].position.x, pose.keypoints[9].position.y);

	// right arm
	// shoulder to elbow
	ctx.moveTo(pose.keypoints[6].position.x, pose.keypoints[6].position.y);
	ctx.lineTo(pose.keypoints[8].position.x, pose.keypoints[8].position.y);
	// elbow to wrist
	ctx.moveTo(pose.keypoints[8].position.x, pose.keypoints[8].position.y);
	ctx.lineTo(pose.keypoints[10].position.x, pose.keypoints[10].position.y);

	
	// left leg
	// hip to knee
	ctx.moveTo(pose.keypoints[11].position.x, pose.keypoints[11].position.y);
	ctx.lineTo(pose.keypoints[13].position.x, pose.keypoints[13].position.y);
	// knee to ankle
	ctx.moveTo(pose.keypoints[13].position.x, pose.keypoints[13].position.y);
	ctx.lineTo(pose.keypoints[15].position.x, pose.keypoints[15].position.y);

	// right leg
	// hip to knee
	ctx.moveTo(pose.keypoints[12].position.x, pose.keypoints[12].position.y);
	ctx.lineTo(pose.keypoints[14].position.x, pose.keypoints[14].position.y);
	// knee to ankle
	ctx.moveTo(pose.keypoints[14].position.x, pose.keypoints[14].position.y);
	ctx.lineTo(pose.keypoints[16].position.x, pose.keypoints[16].position.y);


	ctx.stroke();
	


}