
window.onload=function () {
	LoadAllTweets();
	document.getElementById("publish").addEventListener("click", publishTweeth);
}



var tweets = [
	{username: 'Bobo',  text: 'hello followers!'},
	{username: 'Elvis', text: 'this exercise is really easy!'},
	{username: 'Mimi',  text: 'I want to go to sleep'}
];

var user = "Oz Avichay Taizi";
var pic = "../images/useravatar.png";


function createNewMsgDiv(msg) {
	var tweetUserDiv = document.createElement("div");
	tweetUserDiv.className ="tweet-text col-lg-10";
	var msg_text = document.createTextNode(msg);
	tweetUserDiv.appendChild(msg_text);
	return tweetUserDiv;
}

function createNewImgDiv(pic) {
	var tweetImgDiv =  document.createElement("div");
	tweetImgDiv.className = "col-lg-offset-1 col-lg-1";
	tweetImgDiv.appendChild(createNewImg(pic));
	return tweetImgDiv;
}

function createNewImg(imagePath){
	var newImg = document.createElement('img');
	newImg.setAttribute('src', imagePath);
	return newImg;
}

function createNewUserDiv(userName,isNewTweet) {
	var tweetUserDiv = document.createElement("div");
	isNewTweet ? tweetUserDiv.className = "tweet-username-new col-lg-10" :
		         tweetUserDiv.className = "tweet-username col-lg-10";

	var msg_text = createNewUser(userName);
	tweetUserDiv.appendChild(msg_text);
	return tweetUserDiv;
}

function createNewUser(userName){
	var newUser = document.createElement('label');
	var userName_text = document.createTextNode(userName);
	newUser.appendChild(userName_text);
	return newUser;
}

function createNewTweet(userName, msg, imagePath, isNewTweet){
	var newTweet = document.createElement("div");
	newTweet.className="row tweet";
	newTweet.appendChild(createNewImgDiv(imagePath));
	newTweet.appendChild(createNewUserDiv(userName, isNewTweet));
	newTweet.appendChild(createNewMsgDiv(msg));
	return newTweet;
}

function addTweet(user,msg,pic, isNewTweet) {
	var newTweet = createNewTweet(user,msg,pic, isNewTweet);
	var tweetList = document.getElementById("tweets-section");
	tweetList.appendChild(newTweet);
}

function publishTweeth() {
	var publishText = document.getElementById("publishTextera").value;
	if(publishText != "") {
		var isNewTweet = true;
		document.getElementById("publishTextera").value = "";
		addTweet(user, publishText, pic, isNewTweet);
		tweets.push({username: user, text: publishText});
	}

}

function LoadAllTweets() {
	var isNewTweet = false;
	tweets.forEach( function (tweet) {
		addTweet(tweet.username, tweet.text, pic, isNewTweet);
	})

}
