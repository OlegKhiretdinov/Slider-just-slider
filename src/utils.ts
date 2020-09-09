export function normalaizeOptions(options:any):any {
  const {
    inputSelector = 'input',
    sliderSelector = '.just-slider',
    values = [0, 1000],
    pointsValue = [100],
    
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

  return {inputEl, blockForSlider, diapason, pointsValue};
}