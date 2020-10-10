
document.getElementById("destination").innerHTML = findGetParameter("destination");
document.getElementsByName('destination').value = findGetParameter("destination");


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

function maj(){
  let children = document.getElementsByName('children')[0].value;
  let adult = document.getElementsByName('adult')[0].value;
  document.getElementById("prix").innerHTML = adult*50 + children*25;
}
