const MAX_SCROLL = document.documentElement.scrollHeight;
let header = document.getElementById('header');

document.addEventListener("scroll", (event) => {
  if(window.innerWidth >= 1024)
  {
    let progress = 100 * (document.documentElement.scrollTop / MAX_SCROLL);

	  header.style.setProperty('background-position-y', progress+'%');
  }
});