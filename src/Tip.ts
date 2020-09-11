export class Tip {
  parentEl
  index
  pointsValue
  tipEl
  diapason

  constructor(index:number, pointsValue:number[], diapason:number[], parentEl:HTMLElement) {
    this.parentEl = parentEl;
    this.index = index;
    this.pointsValue = pointsValue;
    const tip = document.createElement('div');
    tip.classList.add('tip');
    this.tipEl = tip;
    this.diapason = diapason
  }

  moveTo():void {
    const positioningVal = (this.pointsValue[this.index] - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const widthPoint = this.tipEl.offsetWidth;
    this.tipEl.style.left = `calc(${positioningVal * 100}% - ${widthPoint / 2}px)`;
  }

  showValues():void {
    this.tipEl.innerHTML = `${this.pointsValue[this.index]}`;
  }

  positioning ():void {
    const samePointHeight = this.parentEl.querySelectorAll('.point')[this.index].offsetHeight;
    const parentHeight = this.parentEl.offsetHeight;
    this.tipEl.style.bottom = `${(parentHeight + samePointHeight) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.tipEl);
    this.positioning()
  }
}
/**
 * значение диапазона для определения местаположения
 * размер поинта дле позиционирования над
 * 
 */