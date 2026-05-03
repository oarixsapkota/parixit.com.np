const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const hoverTargets = document.querySelectorAll('.hover-target');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  cursorFollower.style.left = e.clientX + 'px';
  cursorFollower.style.top = e.clientY + 'px';
});

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursorFollower.style.width = '70px';
    cursorFollower.style.height = '70px';
    cursorFollower.style.backgroundColor = 'rgba(137, 180, 250, 0.3)';
    cursor.style.transform = 'translate(-50%, -50%) scale(0)';
  });

  target.addEventListener('mouseleave', () => {
    cursorFollower.style.width = '40px';
    cursorFollower.style.height = '40px';
    cursorFollower.style.backgroundColor = 'rgba(203, 166, 247, 0.2)';
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// Custom Audio Player Logic
const audio = document.getElementById('custom-audio');
const playBtn = document.getElementById('play-btn');
const vinyl = document.getElementById('vinyl');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');

// Play / Pause Toggle
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = '⏸';
    vinyl.classList.add('playing');
  } else {
    audio.pause();
    playBtn.innerText = '▶';
    vinyl.classList.remove('playing');
  }
});

// Update Progress Bar
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
});

// Click on Progress Bar to Seek
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  if (duration) {
    audio.currentTime = (clickX / width) * duration;
  }
});

// Reset when audio finishes
audio.addEventListener('ended', () => {
  playBtn.innerText = '▶';
  vinyl.classList.remove('playing');
  progressBar.style.width = '0%';
});
