
'use strict';
var Base = require('./base');
var loader = require('./loader');
var video = require('./video');
var renderVideo = require('./renderVideo');
var loadPage = require('./loadPage');
var searchOnRequest = require('./searchOnRequest');
var move = require('./move')
window.onload = function(){
  Base(document.body);
  searchOnRequest();
  // move()

}
