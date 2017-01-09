/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	var Base = __webpack_require__(1);
	var loader = __webpack_require__(2);
	var video = __webpack_require__(3);
	var renderVideo = __webpack_require__(4);
	var loadPage = __webpack_require__(5);
	var searchOnRequest = __webpack_require__(6);
	window.onload = function(){
	  Base(document.body);
	  searchOnRequest();
	
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Base(){
	  document.body.innerHTML = `
	  <header><input class="search" type="search"></header>
	  <main>
	  <ul class = "videoUl"></ul>
	  </main>
	  <footer></footer>
	  `
	}
	
	module.exports = Base;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	function video(videoObj){
	  var videoList = [];
	  for(var i = 0; i < videoObj.items.length; i++){
	    if(videoObj.items[i].id.kind == "youtube#video"){
	      var date = new Date(Date.parse(videoObj.items[i].snippet.publishedAt));
	      var id = videoObj.items[i].id.videoId
	      videoList.push({
	        idVideo: id,
	        link: "http://www.youtube.com/watch?v=" + id,
	        title: videoObj.items[i].snippet.title,
	        trumbnail: videoObj.items[i].snippet.thumbnails.medium.url,
	        channelTitle:  videoObj.items[i].snippet.channelTitle,
	        dateVideo: date.getDate() + '.' + date.getMonth() + "." + date.getFullYear(),
	        description: videoObj.items[i].snippet.description
	      })
	    }
	  }
	  console.log(videoObj.nextPageToken);
	  return videoList;
	}
	
	module.exports = video;


/***/ },
/* 4 */
/***/ function(module, exports) {

	function renderVideo (videoList) {
	  var li = document.createElement("li");
	  li.innerHTML = `
	  <div class="imgLink">
	  <img src="${videoList.trumbnail}" alt="videoImg" class="videoImg">
	  <a href="${videoList.link}" class="videoLink"><p>${videoList.title}</p></a>
	  </div>
	  <div class="description">${videoList.description}</div>
	  <div class="channelDateViews">
	  <div class="channel">${videoList.channelTitle}</div>
	  <div class="date">${videoList.dateVideo}</div>
	  </div>`
	  document.querySelector(".videoUl").appendChild(li)
	}
	
	module.exports = renderVideo;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var loader = __webpack_require__(2);
	var video = __webpack_require__(3);
	var renderVideo = __webpack_require__(4);
	
	function loadPage (search) {
	  var nextPage = '';
	  var url = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPage}&part=snippet&maxResults=15&q=${search}&key=AIzaSyAIQ2HLw1YvSQL7Equ4WPJpJskfbaEN_dg`;
	  loader(url, function (response){
	    var arr = video(response);
	    for(var i = 0; i < arr.length; i++){
	      renderVideo(arr[i]);
	    }
	  });
	}
	
	module.exports = loadPage;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var loadPage = __webpack_require__(5);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map