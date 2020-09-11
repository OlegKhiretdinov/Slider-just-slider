const getStartPoint = (pointsArr:number[], mode:string):number[] => {
  const startPoint:number[] = [];
  let index:number;
  switch (mode) {
    case 'from':
      index = 0;
      break;
    case 'to':
      index = -1;
      break;
    default:
      index = 0;
  }
  while (index < pointsArr.length) {
    startPoint.push(index);
    index += 2;
  }
  return startPoint;
}

export function normalaizeOptions(options:any):any {
  const {
    inputSelector = 'input',
    sliderSelector = '.just-slider',
    values = [0, 1000],
    pointsValue = [100],
    progressbarMode
    
  } = options;

  const inputEl:HTMLElement = document.querySelector(inputSelector);
  const blockForSlider:HTMLElement = document.querySelector(sliderSelector);
  
  const valueIsNumber = (values) => {
    if (values.length !== 2) return false;
    if (typeof values[0] !== 'number' || typeof(values[1]) !== 'number') return false;
    return true;
  }
  const diapason = valueIsNumber(values) ? values: [0, values.length - 1];
  
  pointsValue.sort((a, b) => a - b);
  
  const progressbarFillPoint = getStartPoint(pointsValue, progressbarMode);

  const value = pointsValue // ????
  return {inputEl, blockForSlider, diapason, value, progressbarFillPoint};
}