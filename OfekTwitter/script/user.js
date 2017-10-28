var users = [{name:"Thomas Edison",follow:false, id:0},
			{name:"David Sapiro",follow:true, id:1},
			{name:"James Bond",follow:true, id:2},
			{name:"Janis Joplin",follow:true, id:3},
			{name:"Marty McFly",follow:false, id:4},
			{name:"Isaac Newton",follow:false, id:5},
			{name:"Bill Gates",follow:false, id:6},
			{name:"Janis Joplin",follow:false, id:7},
			{name:"Nikola Tesla",follow:false, id:8}];

var pic = "../images/useravatar.png";
var usersListId = "users-list";
var followeeListId = "followees-list";

function createNewImgDiv(pic) {
    var tweetImgDiv =  document.createElement("div");
    tweetImgDiv.nameDiv.classList.add("user-avatar-img");
    tweetImgDiv.appendChild(createNewImg(pic));
    return tweetImgDiv;
}

function createNewImg(imagePath){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', imagePath);
    return newImg;
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


function createNewUserCard(name, followState, id, status) {
    var newUser = document.createElement("div");
    newUser.id = id;

    if(status)
        newUser.className="user-cell followee-cell col-lg-offset-3 col-lg-6";
    else
        newUser.className="user-cell pull-left col-lg-2";

    newUser.appendChild(createNewImgDiv(pic));
    newUser.appendChild(createNewFollowButton(followState, id));
    newUser.appendChild(CreateNewUserNameDiv(name));
    return newUser;
}

function LoadAllUsers() {
    UnfolllowElement = document.getElementById("UnFollowUsersList");
    FollowElement = document.getElementById("followUsersList");

    for (var i=0; i<users.length; i++){
        var newUserCard = createNewUserCard(users[i].name,users[i].id,users[i].follow);
        users[i].follow ? FollowElement.appendChild(newUserCard) : UnfolllowElement.appendChild(newUserCard);
    }
}

window.onload=function () {
    LoadAllUsers();
}