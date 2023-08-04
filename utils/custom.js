var theme = localStorage.getItem("theme")
var logo = document.getElementById("logo")
console.log(logo)

if (!theme) {
   localStorage.setItem("theme", "dark")
} else {
   if (theme === "light") {
      document.getElementById("theme").setAttribute('data-theme', "light")
      logo.src="/assets/images/logo/mspase-logo-dark.png"
   } else {
      document.getElementById("theme").setAttribute('data-theme', "dark")
      logo.src="/assets/images/logo/mspase-logo.png"
   }
}



function myFunction() {
   const element = document.getElementById("theme")
   let data = element.getAttribute('data-theme')
   const img = document.getElementById("logo")
   
   if (data === "dark") {
      localStorage.setItem("theme", "light")
      element.setAttribute('data-theme', "light")
      img.src="/assets/images/logo/mspase-logo-dark.png"
   } else {
      localStorage.setItem("theme", "dark")
      element.setAttribute('data-theme', "dark")
      img.src="/assets/images/logo/mspase-logo.png"
   }
}