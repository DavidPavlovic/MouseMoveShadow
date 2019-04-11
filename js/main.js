const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function show(e) {
    console.log(e);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
    const walk = 100;

    console.log(this);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,0,255,0.3)`;
}

hero.addEventListener('mousemove', show)