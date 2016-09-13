$(document).ready(function(){

var newTrainName;
var newTrainDestination;
var newFirstTrainTime;
var newTrainFrequency;

var nextTrainArrival;
var minutesAway;


$('#submit').on('click', function(){
	newTrainName = $('#addTrainName').val().trim();
	newTrainDestination = $('#addTrainDestination').val().trim();
	newFirstTrainTime = $('#addFirstTrainTime').val().trim();
	var trainTimeSplit = newFirstTrainTime.split(':');
	var trainTimeRaw = trainTimeSplit[0] + trainTimeSplit[1];
	newTrainFrequency= parseInt($('#addTrainFrequency').val().trim());

	var currentTime = new Date(new Date().getTime()).toLocaleTimeString(); 


	console.log(newTrainName);
	console.log(newTrainDestination);
	console.log(trainTimeRaw);
	console.log(newTrainFrequency);
	console.log(currentTime);
});






















}); //End jQuery










