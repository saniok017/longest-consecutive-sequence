module.exports = function longestConsecutiveLength(array) {
  let sequence = 1, 
      maxSequence = 0,
      tempArray = array;
  const length = tempArray.length;

  if (length < 2) {
    return length;
  }
  if (length > 1){
    tempArray.sort( (a,b)=> a-b );
  }
  for (let c = 0; c < length; c++) {
    if (tempArray[c]+1 == tempArray[c+1]) {
      sequence++;
    }
    if (tempArray[c] === tempArray[c+1]) {
      continue;
    }
    if (sequence > maxSequence) {
      maxSequence = sequence;
    }
    if (tempArray[c]+1 !== tempArray[c+1]) {
      sequence = 1;
    }
  }
  return maxSequence;
}
