import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onTimeupdate() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      savedCurrentTime(seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function savedCurrentTime(seconds) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(onTimeupdate, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);
