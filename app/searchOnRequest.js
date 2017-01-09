var loadPage = require('./loadPage');

function searchOnRequest() {
  var searchInput = document.querySelector('.search');
  searchInput.addEventListener('keyup',
    function (event) {
      if (event.keyCode === 13) {
        clearPage();
        loadPage(searchInput.value);
      }
    });
}

function clearPage () {
  document.querySelector('.videoUl').innerHTML = '';
}

module.exports = searchOnRequest;
