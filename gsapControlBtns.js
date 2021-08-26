// CONTROL BUTTONS

function displayBtns() {
  var btnsDiv = document.createElement('div');
  var play = document.createElement('button');
  var pause = document.createElement('button');
  var resume = document.createElement('button');
  var reverse = document.createElement('button');
  var slow = document.createElement('button');
  var fast = document.createElement('button');
  var btnsList = [play, pause,resume, reverse, slow, fast];

  btnsDiv.style = 'position: absolute; bottom: 50px; left: 20px';

  play.innerHTML = 'Play';
  pause.innerHTML = 'Pause';
  resume.innerHTML = 'Resume';
  reverse.innerHTML = 'Reverse';
  slow.innerHTML = 'Slow';
  fast.innerHTML = 'Fast';

  btnsList.map(function(btn) {
    btn.addEventListener('click', handleClick);
    return btnsDiv.appendChild(btn);
  });

  document.getElementById('cover').insertAdjacentElement('afterend', btnsDiv);
}

function handleClick(e) {
  var target = e && e.target;
 
  switch(target.innerHTML) {
    case 'Play':
      tl.play();
      break;
    case 'Pause': 
      tl.pause();
      break;
    case 'Resume': 
      tl.resume();
      break;
    case 'Reverse': 
      tl.reverse();
      break;
    case 'Slow': 
      tl.timeScale(0.5);
      break;
    case 'Fast': 
      tl.timeScale(2);
      break;
  }
}

displayBtns();
