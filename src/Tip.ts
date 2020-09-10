export class Tip {
  parentEl
  tipEl
  index
  pointsValue

  constructor(index:number, parentEl:HTMLElement, pointsValue:number[]) {
    this.parentEl = parentEl;
    this.index = index;
    this.pointsValue = pointsValue;
    const tip = document.createElement('div');
    tip.classList.add('tip');
    this.tipEl = tip;
  }

  moveTo(num:number):void {
    this.tipEl.style.left = `${num}px`
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