function myFunction() {
   const element = document.getElementById("theme")
   
   let data = element.getAttribute('data-theme')

   let theme = ""

   data === "dark" ? theme = "light" : theme = "dark"

   element.setAttribute('data-theme', theme)
}