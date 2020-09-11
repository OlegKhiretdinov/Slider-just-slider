import { changeValuePoint } from './model';

export function pointMouseDown():void {
  const { width: sliderSize, x: sliderSatrtCoordinate } = this.parentEl.getBoundingClientRect();

  const movePoint = (event):void => {
    const pointDislocation = (event.pageX - sliderSatrtCoordinate) / sliderSize;
    changeValuePoint(this.diapason, this.pointsValue, this.index, pointDislocation)
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