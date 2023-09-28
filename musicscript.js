
let currentSongIndex = 0;
let audio = document.getElementById('audio');
let songs = [
  { id: 1, title: 'Admirin You', audioUrl: 'Admirin You.mp3' },
  { id: 2, title: 'Bachke Bachke Ft Yarah', audioUrl: 'Bachke Bachke Ft Yarah.mp3' },
  { id: 3, title: 'California Love', audioUrl: 'California Love.mp3' },
  { id: 4, title: 'Champion s Anthem', audioUrl: 'Champion s Anthem.mp3' },
  { id: 5, title: 'Cheques', audioUrl: 'Cheques.mp3' },
  { id: 6, title: 'Dunia', audioUrl: 'Dunia.mp3' },
  { id: 7, title: 'Girl I Love You Euro s Intro', audioUrl: 'Girl I Love You Euro s Intro .mp3' },
  { id: 8, title: 'Hopes', audioUrl: 'Hopes.mp3' },
  { id: 9, title: 'Ilzaam', audioUrl: 'Ilzaam.mp3' },
  { id: 10, title: 'Jail', audioUrl: 'Jail.mp3' },
  { id: 11, title: 'Long Back', audioUrl: 'Long Back.mp3' },
  { id: 12, title: 'Mirza 2 0', audioUrl: 'Mirza 2 0.mp3' },
  { id: 13, title: 'My Prime', audioUrl: 'My Prime.mp3' },
  { id: 14, title: 'Rubicon Drill', audioUrl: 'Rubicon Drill.mp3' },
  { id: 15, title: 'Softly', audioUrl: 'Softly.mp3' },
  { id: 16, title: 'Still Rollin', audioUrl: 'Still Rollin.mp3' },
  { id: 17, title: 'Try Me', audioUrl: 'Try Me.mp3' },
  { id: 18, title: 'What', audioUrl: 'What.mp3' },
  { id: 19, title: 'You', audioUrl: 'You.mp3' },
  { id: 20, title: 'Jee Ni Lagda', audioUrl: 'Jee Ni Lagda.mp3' },
  // Add more songs as needed
];

const playlist = document.getElementById('playlist');
const nowPlaying = document.getElementById('nowPlaying');

document.addEventListener('DOMContentLoaded', () => {
  displayPlaylist();
  playSong(currentSongIndex);
});

function displayPlaylist() {
  playlist.innerHTML = '';
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = song.title.toUpperCase();
    li.addEventListener('click', () => playSong(index));
    playlist.appendChild(li);
  });
}

function playSong(index) {
  currentSongIndex = index;
  audio.src = songs[index].audioUrl;
  audio.play();
  updateNowPlaying(index);
}

function updateNowPlaying(index) {
  const currentSongTitle = songs[index].title;
  nowPlaying.innerText = `NOW PLAYING: ${currentSongTitle.toUpperCase()}`;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    document.getElementById('b2').innerHTML = 'PAUSE';
  } else {
    audio.pause();
    document.getElementById('b2').innerHTML = 'PLAY';
  }
}

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
}

function playPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
}