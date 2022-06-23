let position = [];
const items = document.querySelector('.items');
const item = items.children;
let trans = 0;
let display = -1;

function renderImg() {
  let p = 400;
  let file = '';
  let href = '';
  for (let i = 0; i < 34; i++) {
    p -= 400;
    if (i + 1 == 18 || i + 1 == 5 || i + 1 == 27 || i + 1 == 32) {
      file = '.gif';
    } else {
      file = '.svg';
    }
    if (i + 1 == 30) {
      href = 'https://www.oatly.com/en-cn';
    }
    if (i + 1 == 33) {
      href = 'http://localhost:3000/Project-React#HomePage';
    }
    ob = {
      img: './style-img/Slide 16_9 - ' + (i + 1) + file,
      position: p,
      href,
    };
    position.push(ob);
  }
  let imgUI = position.map(
    (item) =>
      ` <li class="item hidden" style="transform: translate3d(0px, 0px, ${item.position}px);">
        <img src='${item.img}' alt="" />
        <a href='${item.href}' target="_blank"></a>
      </li>`,
  );
  items.innerHTML = imgUI.join('');
  console.log(position);
}

renderImg();

item[0].classList.remove('hidden');

window.addEventListener('wheel', (e) => {
  let display = Math.floor(trans / 400);

  display >= 33 ? (display = 33) : (display = display);
  if (e.wheelDelta < 0) {
    trans += 100;
    item[display].classList.remove('hidden');
    if (display + 1 <= 32) {
      item[display + 1].classList.remove('hidden');
    }
  }
  if (e.wheelDelta > 0) {
    trans == 0 ? (trans = 0) : (trans -= 100);
    if (display + 1 <= 33) {
      item[display + 1].classList.add('hidden');
    }
  }
  items.style.transform = 'translate3d(0px, 0px, ' + trans + 'px)';
  console.log(display);
});
