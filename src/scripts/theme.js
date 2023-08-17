var theme = localStorage.getItem("theme")

if (!theme) {
   localStorage.setItem("theme", "dark")
} else {
   if (theme === "light") {
      document.getElementById("theme").setAttribute('data-theme', "light")
   } else {
      document.getElementById("theme").setAttribute('data-theme', "dark")
   }
}

window.App = {

   themeSwitch: function () {
      const element = document.getElementById("theme")
      let data = element.getAttribute('data-theme')
      
      if (data === "dark") {
         localStorage.setItem("theme", "light")
         element.setAttribute('data-theme', "light")
      } else {
         localStorage.setItem("theme", "dark")
         element.setAttribute('data-theme', "dark")
      }
   }

}