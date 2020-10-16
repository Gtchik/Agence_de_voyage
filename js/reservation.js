var price = 0;
fetch('../js/allTravels.json').then(function(response) {
  return response.json();
}).then(function(json) {
  allTravels = json;
  intilialise(allTravels);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});

function intilialise(x){
  var allTravels = x;
  var id = findGetParameter("id");
  for(travel of allTravels){
    if (travel.id == id){
      break;
    }
  }
  var style = document.querySelector('body').style;
  style.setProperty('--background', 'url(.'+travel.src_img+')');
  var style = document.querySelector('.container').style;
  style.setProperty('--background', 'url(.'+travel.src_img+')');
  document.getElementById("destination").innerHTML = travel.title;
  price = travel.price;
  priceCalcul()
}

// Function use for find a get in the URL
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function priceCalcul(){
  let children = document.getElementsByName('children')[0].value;
  let adult = document.getElementsByName('adult')[0].value;
  if (document.getElementsByName('children')[0].value || document.getElementsByName('adult')[0].value){
    const prix = adult*price + children*price*0.4 ;
    document.getElementById("prix").innerHTML = " | "+ prix +"€";
  }

}
