var pic;
var picid = 1;
function press(sw) {
        if (sw == 0) {
            myarray = [9,10,12,15,19];
            if (picid <= 4) {picid += 1;}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else {alert("All sub-problems solved, try conquer instead!")}}
         else  if (sw == 1) {
            if (picid <= 4) {alert("Problem unsolved! Try divide instead!");}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else {picid += 1;}}
        else  if (sw == 2) {
            if (picid <= 2) {picid += 9;}
            else if (picid == 3) {picid += 10;}
            else if (picid == 4) {picid += 12;}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else {alert("All sub-problems solved, try conquer instead!")}}
        else  if (sw == 3) {
            if (picid == 10 || picid == 11) {picid -= 9;}
            else if (picid == 1) {picid = 1;}
            else if (picid == 13) {picid -= 10;}
            else if (picid == 16) {picid -=12;}
            else {picid -= 1;}}
        else {picid = 1;}
        pic = "pics/".concat(picid.toString(),".png");
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
