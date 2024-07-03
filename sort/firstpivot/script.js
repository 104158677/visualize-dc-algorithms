var pic;
var picid = 1;
function press(sw) {
    if (picid == -1 && sw != 2) {alert("This arrays is already sorted.\nPlease press reset button!");}
    else{
        if (sw == 0) {
            picid = (picid == 9) ? 9 : picid +=1; 
            pic = "pics/".concat(picid.toString(),".png");}
         else  if (sw == 1) {
            picid = (picid == 1) ? 1 : picid -=1; 
            pic = "pics/".concat(picid.toString(),".png");}
        else  if (sw == 2) {
            picid = 1;
            pic = "pics/".concat(picid.toString(),".png");}
        else {
            if (picid > 4) {picid = 4;}
            pic = "pics/".concat(picid.toString(),"sorted",".png");
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
