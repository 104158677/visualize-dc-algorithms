var pic;
var picid = 1;
var lastvisited = 1;
function press(sw) {
    if (picid == -1 && sw != 1 && sw != 2) {alert("This arrays is already sorted.\nPlease press reset button!");}
    else{
        if (sw == 0) {
            lastvisited = picid;
            picid = (picid == 14) ? 14 : picid +=1; 
            pic = "pics/".concat(picid.toString(),".png");}
         else  if (sw == 1) {
            picid = lastvisited; 
            pic = "pics/".concat(picid.toString(),".png");}
        else  if (sw == 2) {
            picid = 1;
            pic = "pics/".concat(picid.toString(),".png");}
        else {
            lastvisited = picid;
            if (picid > 4) {picid = 4;}
            picid += 9; 
            pic = "pics/".concat(picid.toString(),".png");
            picid = -1;}}
  document.getElementById('myImage').src = pic;
};

function quiz() {
    window.close();
    window.open('../../errorpage/1.html');
}

function back() {
    window.close();
    window.open('../../main.html');
}
