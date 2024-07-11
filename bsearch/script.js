var pic;
var picid = 1;
function press(sw) {
        if (sw == 0) {
            if (picid <= 2) {picid += 1;}
            else if (picid == 3) {alert("Sub-problems small enough to be solved! Use the solve button!")}
            else if (4 == picid || picid == 5 || picid == 8) {alert("When the answer to the current array is found, try to return it to the original problem using conquer!");}
            else{
                alert("Problem solved! Try reset or back instead!");}}
        else  if (sw == 1) {
            if (picid <= 2) {alert("Problem unsolved! Try divide instead!");}
            else if (picid == 3) {alert("Sub-problem small enough to be solved! Use the solve button before conquer operations!")}
            else if (4 == picid || picid == 5 || picid == 8) {picid += 1;}
            else {alert("Problem solved! Try reset or back instead!");}}
        else  if (sw == 2) {
            if (picid == 1) {picid == 1;}
            else if (picid == 7 || picid == 8) {picid -= 6;}
            else {picid -= 1};}
        else if (sw == 3) {picid = 1;}
        else {
            if (picid < 3) {picid += 6;}
            else if (picid == 3) {picid += 1;}
            else if (picid == 6 || picid == 7 || picid == 9) {alert("Problem solved! Try reset or back instead!");}
            else {alert("When the answer to the current array is found, try to return it to the original problem using conquer!");}}
        pic = "pics/".concat(picid.toString(),".png");
        document.getElementById('myImage').src = pic;}

function quiz() {
    window.close();
    window.open('../errorpage/1.html');
}

function back() {
    window.close();
    window.open('../main.html');
}
