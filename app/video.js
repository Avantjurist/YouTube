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
