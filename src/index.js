const feedDisplay = document.querySelector("#feed");



fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(article => {
        const tit = `<a href="${article.url}"><h3> ${article.title} </h3></a>`
        feedDisplay.insertAdjacentHTML("beforeend", tit)
    })
  }).catch(err => console.log(err))


