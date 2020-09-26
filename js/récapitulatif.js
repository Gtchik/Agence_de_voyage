
var L = ["lastname", "firstname", "children", "adult", "startdate", "enddate", "breakfast"];
Getrecapitulatifvar(L);
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
// Function use to 
function Getrecapitulatifvar(parameterName) {
    parameterName.forEach(function (id){
        document.getElementById(id).innerHTML = findGetParameter(id);
    
    })
}