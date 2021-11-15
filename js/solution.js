function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  let me = [yourLeft, yourRight];
  let friend = [friendsLeft, friendsRight];
  me = me.sort();
  friend = friend.sort();
  for (var i = 0; i < me.length; i++) {
    if (me[i] !== friend[i]) { return false; }
  }
  return true;
}

solution();
