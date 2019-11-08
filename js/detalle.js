
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

    var ul = document.querySelector(".infor")
    var elementsHtml = '<li>'
    elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + informacion[i].poster_path
    elementsHtml += '</li>'
    ul.innerHTML += elementsHtml

  })

  .catch(function (errors) {
      console.log(errors);
  });
