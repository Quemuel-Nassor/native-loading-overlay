document.addEventListener("DOMContentLoaded", function () {
    var linkStyle = document.createElement('link');
    linkStyle.type = 'text/css';
    linkStyle.rel = 'stylesheet';
    linkStyle.href = 'loading-overlay.min.css';
    document.head.appendChild(linkStyle);
  });

function ShowLoadingOverlay() {
    if(!document.getElementById('loading-overlay')){
        var div = document.createElement("div");
        div.id = 'loading-overlay';
        div.classList.add('loading-overlay-container');
        div.innerHTML = '<div class="loading-overlay-spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style="width: 100%; height: 100%; fill: rgb(32, 32, 32);"><circle r="80" cx="500" cy="90" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="500" cy="910" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="90" cy="500" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="910" cy="500" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="212" cy="212" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="788" cy="212" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="212" cy="788" style="fill: rgb(32, 32, 32);"></circle><circle r="80" cx="788" cy="788" style="fill: rgb(32, 32, 32);"></circle></svg></div>';
        document.body.appendChild(div);
    }
}

function HideLoadingOverlay() {
    var element = document.getElementById('loading-overlay');
    if(element)
        document.body.removeChild(element);
}