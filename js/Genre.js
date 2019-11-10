window.onload = function() {
  var url = 'https://api.themoviedb.org/3/genre/tv/list?api_key=6695f769d740495966218b5ad75558be&language=en-US'
  fetch (url)
    .then(function (res) {
      return res.json();
    })
    .then(function (informacion) {
      console.log(informacion);
      console.log(informacion.results.genres_id);

      // nose como hacer para que aparezcan en la listita del dropdown. el drop ya esta puesto
      // var ul = document.querySelector(".genrebtn")
      // var elementsHtml = '<ul class="genrebtn">'
      // elementsHtml += '<li>' + informacion.genres
      // elementsHtml += '<img src="https://image.tmdb.org/t/p/original"' + informacion.poster_path
      // elementsHtml += '</div>'
      // elementsHtml += '<div class="overview">'
      // elementsHtml += '<h1>' + informacion.name
      // elementsHtml += '</h1>'
      // elementsHtml += '<p>' + informacion.overview
      // elementsHtml += '</p>'
      // elementsHtml += '</div>'
}
