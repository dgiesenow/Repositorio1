
var parametrosURL = new URLSearchParams(location.search);
console.log(parametrosURL.get('idSerie'));

var idSerie = parametrosURL.get('idSerie')

var url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=6695f769d740495966218b5ad75558be&language=en-US`;

fetch (url)
  .then(function (res) {
    return res.json();
  })
  .then(function (informacion) {
    console.log(informacion);
    console.log(informacion.overview);
    console.log(informacion.name);
    console.log(informacion.genres);
    console.log(informacion.poster_path);

    var ul = document.querySelector(".todo")
    var elementsHtml = '<div class="todo">'
    elementsHtml += '<div class="poster">'
    elementsHtml += '<img src="https://image.tmdb.org/t/p/original"' + informacion.poster_path
    elementsHtml += '</div>'
    elementsHtml += '<div class="overview">'
    elementsHtml += '<h1>' + informacion.name
    elementsHtml += '</h1>'
    elementsHtml += '<p>' + informacion.overview
    elementsHtml += '</p>'
    elementsHtml += '</div>'



    ul.innerHTML += elementsHtml

  })

  .catch(function (errors) {
      console.log(errors);
  });
