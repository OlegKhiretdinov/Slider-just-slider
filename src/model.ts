function changeValuePoint(
  diapason:number[],
  pointsValue:number[],
  index:number,
  pointDislocation:number):void {
  const minValue = typeof(pointsValue[index - 1]) === 'undefined' ? diapason[0] : pointsValue[index - 1];
  const maxValue = typeof(pointsValue[index + 1]) === 'undefined' ? diapason[1] : pointsValue[index + 1];
  const newPointValue = (diapason[1] - diapason[0]) * pointDislocation + diapason[0];
  if (minValue <= newPointValue && maxValue >= newPointValue) {
    pointsValue[index] = newPointValue;
  }
}

export { changeValuePoint }