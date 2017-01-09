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
