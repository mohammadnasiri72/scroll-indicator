var scrollBar = document.querySelector(".scroll-bar")
window.addEventListener("scroll" , function(e){
   var scrolly = scrollY
   var height = document.documentElement.scrollHeight - window.innerHeight
   var heightBar = (scrolly / height)*100
   scrollBar.style.width = `${heightBar}%`
})