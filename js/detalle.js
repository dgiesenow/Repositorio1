
var parametrosURL = new URLSearchParams(location.search);
console.log(parametrosURL.get('idSerie'));

var idSerie = parametrosURL.get('idSerie')

var url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=6695f769d740495966218b5ad75558be&language=en-US`;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function(informacion) {
    console.log(informacion);
    console.log(informacion.overview);
    console.log(informacion.name);
    console.log(informacion.genres);
    console.log(informacion.poster_path);

    var ul = document.querySelector(".todo")
    var elementsHtml = '<div class="todo">'
    elementsHtml += '<div class="poster">'
    // elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + informacion.poster_path
    elementsHtml += '<img src="https://image.tmdb.org/t/p/original' + informacion.poster_path + '" >'
    elementsHtml += '</div>'
    elementsHtml += '<div class="overview">'
    elementsHtml += '<h1>' + informacion.name
    elementsHtml += '</h1>'
    elementsHtml += '<p>' + informacion.overview
    elementsHtml += '</p>'
    elementsHtml += '</div>'
// falta agruegar caracteristicas q se agruegan de la misma manera con elementshtml +=


    ul.innerHTML += elementsHtml;

    var contenedorImagen = document.querySelector(".imagen")
    var contenedorTexto = document.querySelector(".overview")
    contenedorImagen.innerHTML = '<img src="https://image.tmdb.org/t/p/original"' + informacion.poster_path+' >'
    contenedorTexto.innerHTML += '<p>' + informacion.overview+' </p>'
    // Aca haces las cosas

  })

  .catch(function (errors) {
      console.log(errors);
  });



  var parametrosURL = new URLSearchParams(location.search);
  console.log(parametrosURL.get('idSerie'));


    var urlTrailer='https://api.themoviedb.org/3/tv/'+idSerie+'/videos?api_key=6695f769d740495966218b5ad75558be&language=en-US';

  fetch(urlTrailer)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson);

      var elementoHTML = document.querySelector('.trailer')
          var contenidoParaInsertar = '<p uk-margin> <a class="uk-button uk-button-default botonbueno" href="#modal-media'
          contenidoParaInsertar += '-youtube" uk-toggle>Ver Trailer</a> </p>'
          contenidoParaInsertar += '<div id="modal-media-youtube" class="uk-flex-top" uk-modal>'
          contenidoParaInsertar += '<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">'
          contenidoParaInsertar += '<button class="uk-modal-close-outside" type="button" uk-close></button>'
          contenidoParaInsertar +=  ' <iframe src="https://www.youtube-nocookie.com/embed/'+myJson.results[0].key+'" width="720" height="720" frameborder="0" uk-video></iframe> </div> </div>'

          elementoHTML.innerHTML += contenidoParaInsertar
      })
/*<iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA" width="1920" height="1080" frameborder="0" uk-video></iframe>*/
  /*var contenidoParaInsertar =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+myJson.results[0].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  class="trailer"> </iframe>'*/








  var relacionadas ='https://api.themoviedb.org/3/tv/"+idSerie+"/recommendations?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1';

  fetch(relacionadas)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var poster = 'https://image.tmdb.org/t/p/original'
      console.log(myJson);



          for (var i = 0; i < myJson.results.length; i++){
            var hola = poster + myJson.results[i].poster_path;
            var posters = document.querySelector('.relacion');

            var agregar = ''
            agregar = '<li class="relacionSerie uk-transition-toggle">'
            agregar += '<img class="poster uk-transition-scale-up" src="'+ hola+'" alt="">'
            agregar +='<a href="detalles.html?id='+ myJson.results[i].idSerie+'" class="link uk-transition-scale-up">'+myJson.results[i].name +'</a>'
            agregar += '</li>'

            console.log(agregar, i);
            posters.innerHTML +=  agregar

          }




    });


  var recom = document.querySelector(".relacionadas");
var btn = document.querySelector(".botonchoto");
btn.onclick = function (){
 recom.classList.toggle('show')
}
