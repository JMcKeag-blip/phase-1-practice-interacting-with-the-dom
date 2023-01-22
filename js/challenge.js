/* See the timer increment every second once the page has loaded. */
const timer = document.createElement('div');
timer.innerHTML = '0';
document.body.appendChild(timer);
setInterval(function() {
  timer.innerHTML = parseInt(timer.innerHTML) + 1;
}, 1000);
/* Manually increment and decrement the counter using the plus and minus buttons. */
const counter = document.createElement('div');
counter.innerHTML = '0';
document.body.appendChild(counter);
const plus = document.createElement('button');
plus.innerHTML = '+';
plus.onclick = function() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
};
document.body.appendChild(plus);
const minus = document.createElement('button');
minus.innerHTML = '-';
minus.onclick = function() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
};
document.body.appendChild(minus);
/* "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed. */
const likes = {};
const like = document.createElement('button');
like.innerHTML = 'Like';
like.onclick = function() {
  if (!likes[counter.innerHTML]) {
    likes[counter.innerHTML] = 0;
  }
  likes[counter.innerHTML]++;
  alert('Likes: ' + likes[counter.innerHTML]);
};
document.body.appendChild(like);
/* Pause the counter, which should: */
/* - Stop the counter from incrementing */
/* - Disable the "plus" and "minus" buttons */
/* - Enable a "resume" button */
const pause = document.createElement('button');
pause.innerHTML = 'Pause';
pause.onclick = function() {
  clearInterval(interval);
  plus.disabled = true;
  minus.disabled = true;
  pause.disabled = true;
  resume.disabled = false;
};
document.body.appendChild(pause);
const resume = document.createElement('button');
resume.innerHTML = 'Resume';
resume.disabled = true;
resume.onclick = function() {
  interval = setInterval(function() {
    timer.innerHTML = parseInt(timer.innerHTML) + 1;
  }, 1000);
  plus.disabled = false;
  minus.disabled = false;
  pause.disabled = false;
  resume.disabled = true;
};
document.body.appendChild(resume);
/* pause the counter */
/* disable all buttons except the pause button */

/* switch the label on the button from "pause" to "resume" */

/* Click the "restart" button to restart the counter and re-enable the buttons. */
const restart = document.createElement('button');
restart.innerHTML = 'Restart';
restart.onclick = function() {
  timer.innerHTML = '0';
  counter.innerHTML = '0';
  plus.disabled = false;
  minus.disabled = false;
  pause.disabled = false;
  resume.disabled = true;
};
document.body.appendChild(restart);
/* Leave comments on my gameplay, such as: "Wow, what a fun game this is." */
const comments = document.createElement('div');
document.body.appendChild(comments);
const comment = document.createElement('input');
comment.type = 'text';
document.body.appendChild(comment);
const submit = document.createElement('button');
submit.innerHTML = 'Submit';
submit.onclick = function() {
  const commentNode = document.createElement('div');
  commentNode.innerHTML = comment.value;
  comments.appendChild(commentNode);
  comment.value = '';
};
document.body.appendChild(submit);