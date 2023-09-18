
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix==0){
    return matrix;
  }
  else if(matrix==null){
    return [];
  }
  else if(matrix.length%2==0){
    matrix[matrix.length%2+1]=matrix[matrix.length%2+1].reverse();
  }
  else{
    matrix[matrix.length%2]=matrix[matrix.length%2].reverse();
  }
  return matrix.flat();
}
