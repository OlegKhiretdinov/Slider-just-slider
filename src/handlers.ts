import { pointMovement } from './model';

export function pointHandler():void {
  const { width: sliderSize, x: sliderSatrtCoordinate } = this.parentEl.getBoundingClientRect();

  const movePoint = (event):void => {
    const pointDislocation = (event.pageX - sliderSatrtCoordinate) / sliderSize;
    pointMovement(this.diapason, this.pointsArr, this.index, pointDislocation)
  }
  
  document.addEventListener('mousemove', movePoint);
  
    function stopMove() {
    document.removeEventListener('mousemove', movePoint);
  }

  document.addEventListener('mouseup', stopMove);

  document.ondragstart = function() {
    return false;
  }
}