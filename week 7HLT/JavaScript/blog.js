//Toggle Light mode/Dark mode WORKS
function lightDarkMode() {
    if (document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor =  "aquamarine";
    } else {
    document.body.style.backgroundColor = "black";
}
//TRIED TO GET TEXT TO CHANGE COLOUR WHEN PRESS THE LIGHT/DARK MODE BUTTON BUT THIS IS NOT WORKING
let allElem = document.getElementByName("*");

    if (allElem.style.color == "white"){
        allElem.style.color = "black";
    } else {

    allElem.style.color = "white";
    }
}

/*TRIED TO ADD A NEW BLOG ENTRY TO THE WEBPAGE BUT THIS DID NOT WORK
function newEntry() {
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = document.getElementbyId ("title").value;
  document.body.append(newTitle);
  const newAuthor = document.createElement ("h3");
  newAuthor.innerHTML = document.getElementById ("author").value;
  document.body.append(newAuthor);
  const blogSubmit = document.createElement ("p");
  blogSubmit.innerHTML = document.getElementById ("blogSubmit").value;
  document.body.ammend (blogSubmit);
}*/
//${title.value}
//${author.value}
//${blogSubmit.value}

//TRIED TO ADD A NEW BLOG PAGE AN ALTERNATIVE WAY BUT THIS DID NOT WORK EITHER :()
function newEntry() {
    const newTitle = document.createElement ("h1");
    newTitle.innerHTML = ("title").value;
    document.getElementById("newDiv").appendChild(newTitle);    
    const newAuthor = document.createElement ("h3");
    newAuthor.innerHTML = ("author").value;
    document.getElementById("newDiv").appendChild(newAuthor);
    const blogSubmit = document.createElement ("p");
    newAuthor.innerHTML = ("blogSubmit").value;
    document.getElementById("newDiv").appendChild(blogSubmit);
}