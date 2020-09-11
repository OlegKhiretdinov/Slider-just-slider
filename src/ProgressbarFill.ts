export class ProgressbarFill {
  parentEl
  index
  pointsValue
  progreesbarFillEl
  diapason

  constructor (index:number, pointsValue:[number], diapason:[number], parentEl:HTMLElement) {
    this.parentEl = parentEl;
    this.index = index;
    this.pointsValue = pointsValue;
    const progressbarFill = document.createElement('div');
    progressbarFill.classList.add('progressbar-fill');
    this.progreesbarFillEl = progressbarFill;
    this.diapason = diapason;
  }

  moveTo():void {
    const leftValue = this.index === -1 ? this.diapason[0] : this.pointsValue[this.index];
    const rightValue = this.index + 1 < this.pointsValue.length ? this.pointsValue[this.index + 1] : this.diapason[1]
    const leftPosition = (leftValue - this.diapason[0]) / (this.diapason[1] - this.diapason[0]);
    const rightPosition = (this.diapason[1] - rightValue) / (this.diapason[1] - this.diapason[0]);
    this.progreesbarFillEl.style.left = `${leftPosition * 100}%`;
    this.progreesbarFillEl.style.right = `${rightPosition * 100}%`;
  }

  positioning():void {
    const heightPoint = this.progreesbarFillEl.offsetHeight;
    const parentHeight = this.parentEl.offsetHeight;
    this.progreesbarFillEl.style.top = `${(parentHeight - heightPoint) / 2}px`;
  }

  render():void {
    this.parentEl.append(this.progreesbarFillEl);
    this.positioning();
  }
}