module.exports = {
  title: "Mspase Блог",
  url: process.env.URL || "http://localhost:8080",
  language: "bg",
  description: "Блог за авторски материали, новини, интересни истории",
  cover: (process.env.URL || "http://localhost:8080") + "/images/logo/mspase.logo.twitter.png",
  feed: {
    subtitle: "Блог за авторски материали, новини, интересни истории",
    path: "/feed/feed.xml",
    id: process.env.URL || "http://localhost:8080",
  },
  jsonfeed: {
    path: "/feed/feed.json",
    url: process.env.URL || "http://localhost:8080",
  },
  author: {
    name: "Mspase",
    email: "mayks1@gmail.com",
    url: process.env.URL || "http://localhost:8080",
  }
}

// {
//   "title": "Program Restoran",
//   "url": "https://programrestoran.axcora.com/",
//   "language": "id",
//   "description": "Software restoran aplikasi restoran untuk mesin kasir restoran cafe rumah makan desktop offline dan online integrasi website app terbaru.",
//   "cover": "/img/programrestoran.svg",
//   "feed": {
//     "subtitle": "Software restoran aplikasi restoran untuk mesin kasir restoran cafe rumah makan desktop offline dan online integrasi website app terbaru.",
//     "filename": "feed.xml",
//     "path": "/feed/feed.xml",
//     "id": "https://programrestoran.axcora.com/"
//   },
//   "jsonfeed": {
//     "path": "/feed/feed.json",
//     "url": "https://programrestoran.axcora.com/"
//   },
//   "author": {
//     "name": "creativitas",
//     "email": "axcora@gmail.com",
//     "url": "https://www.fiverr.com/creativitas"
//   }
// }