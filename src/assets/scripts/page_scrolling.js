const MAX_SCROLL = document.documentElement.scrollHeight;
const header = document.getElementById('header');
const toTopButton = document.getElementById('toTopButton');

document.addEventListener("scroll", (event) => {
  let progress = 100 * (document.documentElement.scrollTop / MAX_SCROLL);

  // Handle background parallax as well as the visibility of the scroll to top button
  // If the screen is wide enough, hide scroll button and scroll background
  if(window.innerWidth >= 1024){
	  header.style.setProperty('background-position-y', progress+'%');
    toTopButton.style.display = 'none';
  }
  // Show the scroll to top button only if the page is scrolled down by 25%
  else if (progress > 25){
    toTopButton.style.display = 'block';
  }
  else{
    toTopButton.style.display = 'none';
  }
});