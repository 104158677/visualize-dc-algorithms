var pic;
var picid = 1;
function press(sw) {
        if (sw == 0) {
            myarray = [8,9,11,14];
            if (picid <= 3) {picid += 1;}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else if (picid == 4) {alert("Sub-problems small enough to be solved! Use the solve button!")}
            else {alert("All sub-problems solved, try conquer instead!")}}
         else  if (sw == 1) {
            if (picid <= 3) {alert("Problem unsolved! Try divide instead!");}
            else if (picid == 4) {alert("Sub-problem small enough to be solved! Use the solve button before conquer operations!")}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else {picid += 1;}}
        else  if (sw == 2) {
            if (picid <= 2) {picid += 8;}
            else if (picid == 3) {picid += 9;}
            else if (picid == 4) {picid += 1;}
            else if (myarray.includes(picid)) {alert("Problem solved! Try reset or back!")}
            else {alert("All sub-problems solved, try conquer instead!")}}
        else  if (sw == 3) {
            if (picid == 9 || picid == 10) {picid -= 8;}
            else if (picid == 1) {picid = 1;}
            else if (picid == 12) {picid -= 9;}
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
