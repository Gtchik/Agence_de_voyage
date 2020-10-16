
fetch('js/allTravels.json').then(function(response) {
  return response.json();
}).then(function(json) {
  allTravels = json;
  intilialise(allTravels);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});

function weatherInfo( city,id ) {
  var key = 'cc4c934758953165818e1d857307bbae';
  console.log("b")
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=' + key)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log("a",data);
    initialiseWeather(id,data.main.temp,data.weather[0].icon)
  })
  .catch(function() {
    // catch any errors
  });
}

function initialiseWeather(id,temp,icon){
  for (travel of allTravels){
    if (travel.id==id){
      travel.temp=String(Math.round(temp));
      travel.temp_icon=String(icon);
      break
    }
  }
  if (id==allTravels.length){
    applyFilter();
  }
}

function intilialise(x){
  var allTravels = x;
  for (travel of allTravels){
    weatherInfo(travel.city, travel.id);
  }

}

slidr.create('slidr-div', {
  direction: 'horizontal',
  fade: false,
        speed: 1300,
  keyboard: true,

        parallax: true,
  overflow: true,
  pause: false,
  theme: '#222',
  timing: { 'cube': '0.5s ease-in' },
  touch: true,
  transition: 'cube',
  loop: true,
  autoplay: {
      delay: 10000
  },
  keyboard: {
    enabled: true,
  }

}).start();



function changeTravel(travels){
  document.getElementsByClassName('alltravels')[0].innerHTML="";
  for(var travel of travels)
  {
    document.getElementsByClassName('alltravels')[0].innerHTML += `
  <a href="./html/reservation.html?id=`+travel.id+`" class="color-black">
    <div class="col-3">
        <div class="travel">
          <div class="travel-img">
          <div class="temp"><img src="https://openweathermap.org/img/wn/`+travel.temp_icon+`@2x.png" class="weather-icon"> <br>`+travel.temp+`°C</div>
            <img src="`+travel.src_img+`" alt="">
          </div>
          <div class="travel-description">
            <h2>`+travel.title+`</h2>
            <p>`+travel.desc+`</p>
          </div>
        </div>
      </div>
    </a>`;
  }
}

function applyFilter(){
  document.getElementsByClassName('alltravels')[0].innerHTML="<h3>Loading...<h3>";
  //Contient l'ensemble des filtres existant
  var filters = [
    {
      'name':'low_price',
      'variable':'price',
      'operator':'sup', // /!\ (inf, infeg, sup, supeg, egal, inculdeIn) are accepted
      'typeFunction':'parseInt' // /!\ (parseInt, String) are accepted
    },
    {
      'name':'title',
      'variable':'title',
      'operator':'include', // /!\ (inf, infeg, sup, supeg, egal, inculdeIn) are accepted
      'typeFunction':'String' // /!\ (parseInt, String) are accepted
    }
  ];
  //travel contiendra les voyages a afficher
  var travels = [];
    for(var travel of allTravels)
    {
      // On vérifie que les filtres s'appliquent a se voyage.
      if (checkFilter(filters,travel))
      {
        travels.push(travel);
      }
    }
  changeTravel(travels);
}

// fonction qui return true ou false en fonction de l'opérateur
function inf(x,y){return x<y}
function infeg(x,y){return x<=y}
function sup(x,y){return x>y}
function supeg(x,y){return x>=y}
function egal(x,y){return x==y}
function include(x,y){return x.includes(y)}

function checkFilter(filters,travel){
  for(var filter of filters){
    // valeur du input en majuscule et convertie en fonction de filter.typeFunction
    var inputVal = window[filter.typeFunction](document.getElementsByName(filter.name)[0].value.toUpperCase());
    // valeur du voyage en majuscule et convertie en fonction de filter.typeFunction
    var travelVal = window[filter.typeFunction](travel[filter.variable].toUpperCase());
     // 1. je verifie si le contenu de mon input est plein
     // &&
     // 2. window[filter.operator]() j'appelle la fonction correspondante a l'opérateur
     //    je met en parametre le contenue de mon input et la valeur dans séjour
     //    Exemple :  inf(parseInt(travel.price),parseInt(input:low_price))
     //              ici je regarde si le contenu de l'input (transformé en int) est plus petit que le prix du voyage (transformé en int).

    if (document.getElementsByName(filter.name)[0].value && !window[filter.operator](travelVal,inputVal)){
      return false;
    }
  }
  return true;
}


document.cookie = "username=John Doe; expires=Thu, 18 Dec 2020 12:00:00 UTC";
