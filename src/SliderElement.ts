export abstract class SliderElement {
  parentEl
  element
  direction
  static vhMode = {
    vertical: {  // |||
      mainAxis: 'y',
      mainAxisLength: 'height',
      mainAxisStart: 'bottom',
      mainAxisEnd: 'top',
      mainAxisElementSize: 'offsetHeight',
      mainAxisCoordinate: 'clientY',
      crossAxisLength: 'width',
      crossAxisStart: 'left',
      crossAxisEnd: 'right',
      crossAxisElementSize: 'offsetWidth',
    },
    horizontal: {  // -----
      mainAxis: 'x',
      mainAxisLength: 'width',
      mainAxisStart: 'left',
      mainAxisEnd: 'right',
      mainAxisElementSize: 'offsetWidth',
      mainAxisCoordinate: 'clientX',
      crossAxisLength: 'height',
      crossAxisStart: 'bottom',
      crossAxisEnd: 'top',
      crossAxisElementSize: 'offsetHeight',
    }
  }

  constructor(parentEl: HTMLElement, direction:string) {
    this.parentEl = parentEl;
    this.direction = direction;
  }

  render():void {
    this.parentEl.append(this.element);
  }
}