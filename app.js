let clicks = 0;
let clickDisplay = document.getElementById('clicks');

let tickle= document.getElementById('cat');
tickle.addEventListener('click', function(){
  clickDisplay.innerHTML = ++clicks;
}, false);
