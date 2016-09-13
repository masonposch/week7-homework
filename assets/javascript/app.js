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
	newTrainFrequency= parseInt($('#addTrainFrequency').val().trim());

	var currentTime = moment().format('h:mm:ss');



	console.log(newTrainName);
	console.log(newTrainDestination);
	console.log(newFirstTrainTime);
	console.log(newTrainFrequency);
	console.log(currentTime);
});






















}); //End jQuery










