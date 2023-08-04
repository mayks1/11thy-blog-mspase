function myFunction() {
   const element = document.getElementById("theme")
   let data = element.getAttribute('data-theme')
   const img = document.getElementById("logo")
   
   if (data === "dark") {
      element.setAttribute('data-theme', "light")
      img.src="/assets/images/logo/mspase-logo-dark.png"
   } else {
      element.setAttribute('data-theme', "dark")
      img.src="/assets/images/logo/mspase-logo.png"
   }
}