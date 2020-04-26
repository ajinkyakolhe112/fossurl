var endpoint = "https://www.jsonstore.io/984265cf278a2655f7f3d3c740ff9227152aff9d4d2d47f0359ff2c89357f9d0";

function fetchJSON(a) {
    var f = new XMLHttpRequest;
    f.open("GET", a, false);
    f.send(null);
    return f.responseText
}

function isURL(a) {
    let url = a
    if (!a.startsWith("javascript:")) {
        return true;
    } else {
        return false;
    }
}
var hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
    var res = JSON.parse(fetchJSON(endpoint + "/?q=s:" + hashh))[0];
    var data = res["l"];
    console.log(data);
    if (data != null) {
        if (isURL(data)) {
            window.location.href = data;
        }
    }
}
