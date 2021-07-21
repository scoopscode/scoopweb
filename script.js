window.onscroll = function(){
  console.log('scrolled')
  const top = document.body.getBoundingClientRect().top
  console.log(top)
  const navbar = document.getElementById('navbar')
  if (top < 0){
    navbar.style.backgroundColor = "rgb(54, 70, 94)";
    navbar.style.boxShadow = "black 1px 1px 6px";
  } else if (top > 0){
    navbar.style.backgroundColor = "transparent"
    navbar.style.boxShadow = "unset";
  }
  else{
    navbar.style.backgroundColor = "transparent"
    navbar.style.boxShadow = "unset";
  }
}
