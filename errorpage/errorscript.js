function myFunction($event) {
    console.log(event);
    var temp = event.target;
    var temp1 = event.target.nextElementSibling;
    console.log(temp);
    console.log(temp1);
  if (temp1.className=="answerBlock") {
      temp1.classList.remove("answerBlock");
      temp.innerHTML = 'Show Answer';
  } else {
      temp1.classList.add("answerBlock");
      temp.innerHTML = 'Hide Answer';
  }
  }

function back() {
    window.close();
    window.open('../main.html')
}

var htmlid = parseInt(location.pathname.substring(location.pathname.lastIndexOf("/") + 1).charAt(0));
function press(sw) {
        if (sw == 0) {
            if (htmlid == 7){alert("This is the last question!");}
            htmlid = (htmlid == 7) ? 7 : htmlid +=1; 
            window.close();
            window.open(htmlid.toString().concat(".html"))}
        else{
            htmlid = (htmlid == 1) ? 1 : htmlid -=1; 
            window.close();
            window.open(htmlid.toString().concat(".html"))}
};

var answers = ["B"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    if (getScore() == 1) {
        document.getElementById("myresults").innerHTML = "Bravo!";
    }
    else {document.getElementById("myresults").innerHTML = "Think it again!";}
}