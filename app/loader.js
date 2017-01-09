function loader(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    callback(JSON.parse(xhr.responseText));
  }
  }
  xhr.open('GET', url, true);
  xhr.send(null);
}

module.exports = loader;
