function pointMovement(
  diapason:number[],
  pointsArr:number[],
  index:number,
  pointDislocation:number):void {
  const minValue = typeof(pointsArr[index - 1]) === 'undefined' ? diapason[0] : pointsArr[index - 1];
  const maxValue = typeof(pointsArr[index + 1]) === 'undefined' ? diapason[1] : pointsArr[index + 1];
  const newPointValue = Math.round((diapason[1] - diapason[0]) * pointDislocation + diapason[0]);
  if (minValue <= newPointValue && maxValue >= newPointValue) {
    pointsArr[index] = newPointValue;
  }
  console.log('minValue', minValue, '\n', 'maxValue', maxValue)
  console.log('newPointValue', newPointValue)
  console.log('VALUE', pointsArr[index])
}

export { pointMovement }