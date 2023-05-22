//Случайная html страница
const page = document.querySelector('.Random');
const links = ['Kimetsu no Yaiba Train.html', 'Jujutsu 0.html', 'SAO Aria Movie.html'];

page.onclick = function(event) {
  event.preventDefault();
  window.location.href = links[Math.floor(Math.random() * links.length)];
};

//Выбор из надавно добавленного 
const slide1 = document.querySelector('.Slide1');
const slide2 = document.querySelector('.Slide2');
const slide3 = document.querySelector('.Slide3');
const slide4 = document.querySelector('.Slide4');
const slide5 = document.querySelector('.Slide5');

slide1.onclick = function(event){
  event.preventDefault();
  window.location.href = 'SAO Aria Movie.html';
}

slide2.onclick = function(event){
  event.preventDefault();
  window.location.href = 'Jujutsu 0.html';
}

slide3.onclick = function(event){
  event.preventDefault();
  window.location.href = 'Kimetsu no Yaiba Train.html';
}

slide4.onclick = function(event){
  event.preventDefault();
  window.location.href = '';
}

slide5.onclick = function(event){
  event.preventDefault();
  window.location.href = '';
}