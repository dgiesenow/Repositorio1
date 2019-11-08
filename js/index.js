window.onload= function () {
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1")
  	.then(function (res) {
  		return res.json();
  	})
  	.then(function (informacion) {

      // console.log(informacion.results); Esto es para que funcione el detalle.  
      var ul = document.querySelector(".populares")
      var elementsHtml = '';

      for (var i = 0; i < informacion.results.length; i++) {
        // console.log(informacion.results[i].name);
        // console.log(informacion.results[i].id);
        // console.log(informacion.results[i].poster_path);
         elementsHtml += `
          <li>
            <div class="uk-panel">
              <a href="detalle.html?idSerie=${informacion.results[i].id}">
                <img src="https://image.tmdb.org/t/p/original/${informacion.results[i].poster_path}" elements>
              </a>
            </div>
          </li>
        `;

      }

      ul.innerHTML = elementsHtml;
    })
  	.catch(function (errors) {
  		console.log(errors);
  	});



// top rated
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1")
  	.then(function (res) {
  		return res.json();
  	})
  	.then(function (informacion) {
      console.log(informacion.results);
      for (var i = 0; i < informacion.results.length; i++) {
        informacion.results[i]
        console.log(informacion.results[i].name);
        console.log(informacion.results[i].id);
        console.log(informacion.results[i].poster_path);

        var ul = document.querySelector (".top-rated")
        var elementsHtml ='<li>'
         elementsHtml +='<div class="uk-panel">'
         elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" elements>'
         elementsHtml +='</div> </li>'
         ul.innerHTML += elementsHtml
      }
    	})
  	.catch(function (errors) {
  		console.log(errors);
  	});

    // popular

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1")
      .then(function (res) {
        return res.json();
      })
      .then(function (informacion) {
        console.log(informacion.results);
        for (var i = 0; i < informacion.results.length; i++) {
          informacion.results[i]
          console.log(informacion.results[i].name);
          console.log(informacion.results[i].id);
          console.log(informacion.results[i].poster_path);

          var ul = document.querySelector (".populares")
          var elementsHtml ='<li>'
           elementsHtml +='<div class="uk-panel">'
           elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" elements>'
           elementsHtml +='</div> </li>'
           ul.innerHTML += elementsHtml
        }
        })
      .catch(function (errors) {
        console.log(errors);
      });

  // On air

      fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=6695f769d740495966218b5ad75558be&language=en-US&page=1")
        .then(function (res) {
          return res.json();
        })
        .then(function (informacion) {
          console.log(informacion.results);
          for (var i = 0; i < informacion.results.length; i++) {
            informacion.results[i]
            console.log(informacion.results[i].name);
            console.log(informacion.results[i].id);
            console.log(informacion.results[i].poster_path);

            var ul = document.querySelector (".onair")
            var elementsHtml ='<li>'
             elementsHtml +='<div class="uk-panel">'
             elementsHtml +='<img src="https://image.tmdb.org/t/p/original' + informacion.results[i].poster_path + '" elements>'
             elementsHtml +='</div> </li>'
             ul.innerHTML += elementsHtml
          }
          })
        .catch(function (errors) {
          console.log(errors);
        });

}
