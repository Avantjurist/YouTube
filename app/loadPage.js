var loader = require('./loader');
var video = require('./video');
var renderVideo = require('./renderVideo');

function loadPage (search) {
  var nextPage = '';
  var url = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPage}&part=snippet&maxResults=15&q=${search}&key=AIzaSyAI_zNcliOL-ibjTfU_DlI7Gz-b-Ld-36Y`;
  loader(url, function (response){
    var arr = video(response);
    for(var i = 0; i < arr.length; i++){
      renderVideo(arr[i]);
    }
  });
}

module.exports = loadPage;
