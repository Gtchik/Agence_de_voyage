
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
  console.log("a");
  let children = document.getElementsByName('children').value;
  let adult = document.getElementsByName('adult').value;
  console.log(adult);
  document.getElementById("prix").innerHTML = parseInt(adult)*50 + parseInt(children)*25;
}
