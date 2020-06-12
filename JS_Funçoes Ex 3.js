function countChar(string,arg) {
  let count = 0;
  for (i=0; i<string.length; i++) {
    if (string.charAt(i)===arg) {
      count +=1;
    }
  }
  return count;
}
