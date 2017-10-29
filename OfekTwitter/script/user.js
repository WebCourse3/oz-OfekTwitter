var users = [{name:"Thomas Edison",follow:false, id:0},
			{name:"David Sapiro",follow:true, id:1},
			{name:"James Bond",follow:true, id:2},
			{name:"Janis Joplin",follow:false, id:3},
			{name:"Marty McFly",follow:false, id:4},
			{name:"Isaac Newton",follow:false, id:5},
			{name:"Bill Gates",follow:false, id:6},
			{name:"Janis Joplin",follow:false, id:7},
			{name:"Nikola Tesla",follow:false, id:8}];

var pic = "../images/useravatar.png";
//var usersListId = "users-list";
//var followeeListId = "followees-list";
var UnfollowText = "Unfollow";
var followText = "Follow";
var followClassName = "user-cell followee-cell col-lg-offset-3 col-lg-6";
var UnfollowClassName = "user-cell pull-left col-lg-2";
var UnfolllowElement = document.getElementById("unFollowersUserList");
var FollowElement = document.getElementById("followersUserList");

function createNewImgDiv(pic) {
    var tweetImgDiv =  document.createElement("div");
    tweetImgDiv.classList.add("user-avatar-img");
    tweetImgDiv.appendChild(createNewImg(pic));
    return tweetImgDiv;
}

function createNewImg(imagePath){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', imagePath);
    return newImg;
}

function createNewFollowButton(followState, id)
{
    var newButton = document.createElement('button');
    newButton.className = "btn btn-primary btn-sm";
    newButton.type = "submit";
    newButton.textContent = followState ? UnfollowText : followText;

    newButton.addEventListener("click", function(){
	    followClick(users[id]["follow"],id,this);

    },false);

    return newButton;
}

function followClick(followState,id,followButton) {

    if (followState) {
		var removedUserCard = FollowElement.removeChild(document.getElementById(id));
	    UnfolllowElement.appendChild(removedUserCard);
        followButton.innerHTML = followText;
        removedUserCard.className = UnfollowClassName;
	    users[id]["follow"] = !followState;
    }
    else
    {
        var removedUserCard = UnfolllowElement.removeChild(document.getElementById(id));
	    FollowElement.appendChild(removedUserCard);
        followButton.innerHTML = UnfollowText;
        removedUserCard.className = followClassName;
	    users[id]["follow"] = !followState;
    }
}

function CreateNewUserNameDiv(name) {
    var nameDiv =  document.createElement("div");
    nameDiv.classList.add("user-cell-name");
    nameDiv.appendChild(createNewParagraph(name));
    return nameDiv;
}

function createNewParagraph(string){
    var newParagraph = document.createElement('p');
    newParagraph.appendChild(document.createTextNode(string));
    return newParagraph;
}


function createNewUserCard(name, followState, id) {
    var newUser = document.createElement("div");
    newUser.id = id;

    if(followState)
        newUser.className=followClassName;
    else
        newUser.className=UnfollowClassName;

    newUser.appendChild(createNewImgDiv(pic));
    var newButton = createNewFollowButton(followState, id);
    newUser.appendChild(newButton);

    newUser.appendChild(CreateNewUserNameDiv(name));
    return newUser;
}

function LoadAllUsers() {
    UnfolllowElement = document.getElementById("unFollowersUserList");
    FollowElement = document.getElementById("followersUserList");

    for (var i=0; i<users.length; i++){
        var newUserCard = createNewUserCard(users[i].name,users[i].follow,users[i].id);
        users[i].follow ? FollowElement.appendChild(newUserCard) : UnfolllowElement.appendChild(newUserCard);
    }
}

function filterUsers() {
	var searchElement = document.getElementById("filter");
	searchElement.addEventListener("input", keypressed);
	function keypressed() {
		var searchString = searchElement.value;

		if(searchString !== null)
	    {
			var cards = UnfolllowElement.getElementsByClassName('user-cell');

			for (var i = 0; i < cards.length; ++i) {
				var card = cards[i];
				var user = users[card.id];
				user.name.toUpperCase().indexOf(searchString.toUpperCase()) != -1 ? card.style.display = '' : card.style.display = 'none';
			}
		}
	}
}

window.onload=function () {
    LoadAllUsers();
	filterUsers();
}