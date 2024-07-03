var pic;
var picid = 1;
function press(sw) {
        if (sw == 0) {
            if (picid == 2 || picid == 4) {alert("It should be conquer after divide");}
            else if (picid == 6) {alert("23 is already found!");}
            else {
                picid += 1; 
                pic = "pics/".concat(picid.toString(),".png");}}
        else  if (sw == 1) {
            if (picid%2 == 1) {alert("It should be divide after conquer");}
            else if (picid == 6) {alert("23 is already found!");}
            else {
                picid +=1; 
                pic = "pics/".concat(picid.toString(),".png");}}
        else  if (sw == 2) {
            picid = (picid == 1) ? 1 : picid -=1; 
            pic = "pics/".concat(picid.toString(),".png");}
        else {
            picid = 1;
            pic = "pics/".concat(picid.toString(),".png");}
  document.getElementById('myImage').src = pic;}

function quiz() {
    window.close();
    window.open('../errorpage/1.html');
}

function back() {
    window.close();
    window.open('../main.html');
}
