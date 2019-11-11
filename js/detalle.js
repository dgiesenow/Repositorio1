
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

<<<<<<< Updated upstream
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
=======
    var contenedorImagen = document.querySelector(".imagen")
    var contenedorTexto = document.querySelector(".overview")
    contenedorImagen.innerHTML = '<img src="https://image.tmdb.org/t/p/original"' + informacion.poster_path+' >'
    contenedorTexto.innerHTML += '<p>' + informacion.overview+' </p>'
    // Aca haces las cosas
>>>>>>> Stashed changes

  })

  .catch(function (errors) {
      console.log(errors);
  });

  //
  //
  // fetch(url)
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (informacion) {
  //     console.log(informacion.results);
  //     for (var i = 0; i < informacion.results.length; i++) {
  //       informacion.results[i]
  //       console.log(informacion.results[i].name);
  //       console.log(informacion.results[i].id);
  //       console.log(informacion.results[i].poster_path);
  //       console.log(informacion.results[i].overview);
  //
  //       var buscadorGeneral = document.querySelector (".paginadetalles")
  //       var elementsHtml ='<div class=" uk-card uk-card-default uk-card-body uk-width-1-5">'
  //        elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + informacion.results[i].overview + console.log(informacion.results[i].name>'
  //        elementsHtml +='</div> '
  //        buscadorGeneral.innerHTML += elementsHtml
  //     }
  //     })
  //   .catch(function (errors) {
  //     console.log(errors);
  //   });
