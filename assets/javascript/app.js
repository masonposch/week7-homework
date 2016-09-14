$(document).ready(function(){

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfMAg_LlfbMs9Cta69HJwT8co3JEdky8E",
    authDomain: "week7-homework-aab2c.firebaseapp.com",
    databaseURL: "https://week7-homework-aab2c.firebaseio.com",
    storageBucket: "week7-homework-aab2c.appspot.com",
    messagingSenderId: "1012099544986"
};

firebase.initializeApp(config);

database = firebase.database();

var newTrainName;
var newTrainDestination;
var newFirstTrainTime;
var newTrainFrequency;

var nextTrainArrival;
var minutesAway;



//WHEN CLICKING SUBMIT AFTER ADDING A NEW TRAIN

$('#submit').on('click', function(){
	newTrainName = $('#addTrainName').val().trim();
	newTrainDestination = $('#addTrainDestination').val().trim();
	newTrainFrequency= parseInt($('#addTrainFrequency').val().trim());
	newFirstTrainTime = $('#addFirstTrainTime').val().trim();

	var currentTime = moment().format('hh:mm');



	console.log(newTrainName);
	console.log(newTrainDestination);
	console.log(newTrainFrequency);
	console.log(newFirstTrainTime);
	console.log(currentTime);

	$('#addTrainName').val("");
	$('#addTrainDestination').val("");
	$('#addTrainFrequency').val("");
	$('#addFirstTrainTime').val("");

	var trains = {
		name: newTrainName,
		destination: newTrainDestination,
		frequency: newTrainFrequency,
		firstTrainTime: newFirstTrainTime,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	}

	database.ref().push(trains);

	return false;

});

database.ref().on('child_added', function(childSnapShot){
	var trName = childSnapShot.val().name;
	var trDestination = childSnapShot.val().destination;
	var trFrequency = childSnapShot.val().frequency;
	var trFirstTime = childSnapShot.val().firstTrainTime;

	var addedTrainName = $('<td>').html(trName);
	var addedTrainDestination = $('<td>').html(trDestination);
	var addedTrainFrequency = $('<td>').html(trFrequency);
	var addedTrainFirstTime = $('<td>').html(trFirstTime);

	var addedTrainRow = $('<tr>').append(addedTrainName, addedTrainDestination, addedTrainFrequency, addedTrainFirstTime);
	$('table').append(addedTrainRow);
});






















}); //End jQuery



// Diff between current time and first train
//Diff divided by frequency = x
//frequency - x = next train






