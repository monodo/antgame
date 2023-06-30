function init() {
    // initialisation stuff here
    function checkKey(e) {

        let speed = 10;
    
        if (e.keyCode == '38') {
            // up arrow
            firstAnt = document.getElementById("first-ant");
            if (parseInt(firstAnt.style.top || 0) - speed > 0) {
                firstAnt.style.top = (parseInt(firstAnt.style.top || 0) - speed)+'px';
            }
        }
        else if (e.keyCode == '40') {
            // down arrow
            firstAnt = document.getElementById("first-ant");
            if (parseInt(firstAnt.style.top || 0) + speed < (window.innerHeight - firstAnt.offsetWidth)) {
                firstAnt.style.top = (parseInt(firstAnt.style.top || 0) + speed)+'px';
            }
        }
        else if (e.keyCode == '37') {
           // left arrow
           firstAnt = document.getElementById("first-ant");
           if (parseInt(firstAnt.style.left || 0) - speed > 0) {
                firstAnt.style.left = (parseInt(firstAnt.style.left || 0) - speed)+'px';
           }
        }
        else if (e.keyCode == '39') {
           // right arrow
           firstAnt = document.getElementById("first-ant");
           if (parseInt(firstAnt.style.left || 0) + speed < (window.innerWidth - firstAnt.offsetHeight)) {
                firstAnt.style.left = (parseInt(firstAnt.style.left || 0) + speed)+'px';
           }
        }
    
    }

    document.onkeydown = checkKey;
}


