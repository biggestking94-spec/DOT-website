let span = document.querySelector('.menu')
let div = document.querySelector('.nav')
let links = document.querySelectorAll('.nav a')

span.onclick = function OpenNav() {
 div.classList.remove("none")
}
 links.forEach((a) => {
  a.onclick = function closenav() {
   div.classList.add("none")
  }
 }
 ) 
 
let dark = document.getElementById('dark')
let light = document.getElementById('light')
let btn = document.getElementById('btn')

if (localStorage.getItem('theme') === ('dark')) {
 
 document.body.classList.add('darkmod')
 
 dark.classList.add('svgbt')
 
 light.classList.remove('svgbt')
} else {
 document.body.classList.remove('darkmod')
 
 dark.classList.remove('svgbt')
 
 light.classList.add('svgbt')
};

btn.onclick = function addclass() {
 
 let isDark = document.body.classList.toggle('darkmod')
 
 dark.classList.toggle('svgbt', isDark)
 
 light.classList.toggle('svgbt', !isDark)
 
 localStorage.setItem('theme', isDark ? 'dark' : 'light')
};



