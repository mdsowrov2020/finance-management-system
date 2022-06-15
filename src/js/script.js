const navigation = document.querySelector('.navigation');
const main_content = document.querySelector('.main');
const namburger_btn = document.querySelector('.navigation__icon');

let dropdown_toggle = document.querySelector('.user-dropdown__toggle');
let user_block = document.querySelector('.user-block');

dropdown_toggle.onclick = function () {
  user_block.classList.toggle('user-block--active');
};

namburger_btn.addEventListener('click', () => {
  navigation.classList.toggle('hidden_nav');
  main_content.classList.toggle('main--active');
  namburger_btn.classList.toggle('hamburger--active');
});

// Tab component

const tab_list = document.querySelectorAll('.tab__list');
const tab_container = document.querySelector('.tab__container');
const tab_content = document.querySelectorAll('.tab__content');

tab_container.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab__list');

  if (!clicked) return;

  tab_list.forEach((t) => t.classList.remove('tab__list--active'));
  clicked.classList.add('tab__list--active');

  tab_content.forEach((c) => c.classList.remove('tab__content--active'));

  //Active content

  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add('tab__content--active');
});
