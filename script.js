// Make 16x16 grid //
let body = document.querySelector('body');
let sketchContainer = document.createElement('div');
sketchContainer.classList = 'sketchContainer';
body.appendChild(sketchContainer);

// creat initial sketch //
makeLine(16);
makeSquare(16);

function getSize() {
    let size = prompt("How large?");
    while (size > 100) {
        alert("Too large! Highest we can go is 100x100.")
        size = prompt("How large?");
    }
    let rmLines = document.querySelectorAll('.line');
    rmLines.forEach(element => {
        sketchContainer.removeChild(element);
    });
    makeLine(size);
    makeSquare(size);
}

function makeLine(num) {
    for (i = 0; i < num; i++) {
        let line = document.createElement('div');
        line.classList = 'line';
        line.style.display = 'flex';
        sketchContainer.appendChild(line);
    }
}


function makeSquare(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            let sqr = document.createElement('div');
            let line = document.querySelectorAll('.line');
            sqr.classList = 'square';
            line[i].appendChild(sqr);
        }
    }
}