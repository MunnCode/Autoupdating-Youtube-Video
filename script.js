//Updates the title of a video to show either video
function statsTitle() {
    //Video info
    var videoID = 'OWmFU2Iqb-I'; //https://youtu.be/OWmFU2Iqb-I
    var part = 'snippet,statistics';
    var params = {'id': videoID};
    var response = YouTube.Videos.list(part, params);
    var video = response.items[0];
  
    //Video title variables
    var videoViews = video.statistics.viewCount;
    var videoLikes = video.statistics.likeCount;
    var videoDislikes = video.statistics.dislikeCount;
    var videoComments = video.statistics.commentCount;
    
    //Set Video Title incoportating "Video title variables"
    var videoTitle = 'This video has ' + videoViews + ' views, ' + videoLikes + ' likes, ' + videoDislikes + ' dislikes, and ' + videoComments + ' comments!';
    
    //Update youtube video
    video.snippet.title = videoTitle;
    try
    {
        YouTube.Videos.update(video, part);
    }
    catch(e){}
}