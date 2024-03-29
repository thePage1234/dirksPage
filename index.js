let dirksImg = document.getElementById("Dirks");
dirksImg.onmouseover = awoken;
dirksImg.onclick = awoken;

function awoken() {
    dirksImg.src = "./images/angryDirks.jpeg";
    dirksImg.onmouseover = null;
    dirksImg.onclick = null;
    document.getElementById("bg").style.backgroundColor = "red";
    count = 0;
    interv = setInterval(moveDirks, 5, count);
}

function moveDirks() {
    count += 1;
    if (count < 400){
        directions = [-1, 1];
        let y = Math.floor(Math.random() * 2);
        let x = Math.floor(Math.random() * 2);
        x = parseInt(dirksImg.style.left) + 5*directions[x];
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > 800) x = 800;
        y = parseInt(dirksImg.style.top) + 5*directions[y];
        dirksImg.style.top = y + "px";
        dirksImg.style.left = x + "px";
    }
    else {
        grovel();
    }
}

function grovel() {
    document.getElementById("bg").style.backgroundColor = "white";
    clearInterval(interv);
    dirksImg.src = "./images/upsetDirks.jpeg";
    tim = setTimeout(reset, 2000);
}

function reset() {
    dirksImg.src = "./images/sleepingDirks.jpeg";
    dirksImg.onmouseover = awoken;
    dirksImg.onclick = awoken;
}