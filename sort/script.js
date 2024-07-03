function press(sw) {
        if (sw == 0) {
            window.open('firstpivot/main.html')}
        else  if (sw == 1) {
            window.open('lastpivot/main.html')}
        else  if (sw == 2) {
            window.open('middlepivot/main.html')}
        else {
            window.open('randompivot/main.html')}
};

function back() {
    window.close();
    window.open('../main.html');
}


