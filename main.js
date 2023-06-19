let picnumber = 32
const picfield = document.querySelector('section');
for (let i = 1; i <= picnumber; i++) {
    let pic = document.createElement('img');
    pic.src = `pics/${i}.jpg`;
    pic.id = i;
    if (pic.width < pic.height) {
        pic.style.width = '90px';
    }
    picfield.appendChild(pic);
}

const main = document.querySelector('main');
const picview = document.querySelector('.picview');
const picviewpic = document.querySelector('.picview img');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');

const pictures = document.querySelectorAll('section img');
let active = false;

pictures.forEach(function (pic) {
    pic.addEventListener('click', function () {
        if (!active) {
        main.style.filter = 'blur(3px)';
        picview.style.display = 'flex';
        picviewpic.src = `pics/${pic.id}.jpg`;
        picviewpic.id = pic.id;
        setTimeout(() => {active = true;}, 100); 

        sizefix();
        }
    });
});
main.addEventListener('click', function () {
    if (active) {
        main.style.filter = 'blur(0px)';
        picview.style.display = 'none';
        active = false;
    }
});

back.addEventListener('click', () => {
    if (picviewpic.id > 1) {
        picviewpic.id--;
        picviewpic.src = `pics/${picviewpic.id}.jpg`;
        sizefix();
    }
});
forward.addEventListener('click', () => {
    if (picviewpic.id < picnumber) {
        picviewpic.id++;
        picviewpic.src = `pics/${picviewpic.id}.jpg`;
        sizefix();
    }
});

function sizefix() {
    if (picviewpic.width > picviewpic.height) picview.style.top = '38%';
    else picview.style.top = '25%';
}