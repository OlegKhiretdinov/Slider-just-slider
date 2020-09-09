export class Tip {
  parentEl
  tipEl
  index

  constructor(index:number, parentEl:HTMLElement) {
    this.parentEl = parentEl;
    this.index = index;
    const tip = document.createElement('div');
    tip.classList.add('tip');
    this.tipEl = tip;
  }

  moveTo(num:number):void {
    this.tipEl.style.left = `${num}px`
  }

  positioning ():void {
    const heightTip = this.tipEl.offsetHeight;
    const samePointHeight = this.parentEl.querySelectorAll('.point')[this.index].offsetHeight;
    const parentHeight = this.parentEl.offsetHeight;
    this.tipEl.style.top = `${(parentHeight - samePointHeight) / 2 - heightTip}px`;
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