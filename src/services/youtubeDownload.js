var fs = require('fs');
var youtubedl = require('youtube-dl');

module.exports = {
    download
}

function download(url, cmd) {
    var video = youtubedl(
        url,
  // Optional arguments passed to youtube-dl.
        ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
        { cwd: __dirname }
    );
   
  // Will be called when the download starts.

  video.on('info', function(info) {
    console.log('\nDownload started');
    console.log('filename: ' + info._filename);
    console.log('size: ' + info.size);
  });
   
  video.pipe(fs.createWriteStream('myvideo.mp4'));
}
