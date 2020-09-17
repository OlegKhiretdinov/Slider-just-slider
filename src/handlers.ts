import { changeValuePoint } from './model';
import { SliderElement } from './SliderElement';

export function pointMouseDown():void {
  const {
    [SliderElement.vhMode[this.direction].mainAxisLength]: sliderSize,
    [SliderElement.vhMode[this.direction].mainAxisStart]: sliderSatrtCoordinate,
  } = this.parentEl.getBoundingClientRect();

  const movePoint = (event):void => {
    const pointMoveCoordinate = event[SliderElement.vhMode[this.direction].mainAxisCoordinate]
    const coordinateDiference = this.direction === 'vertical' ? sliderSatrtCoordinate - pointMoveCoordinate : pointMoveCoordinate - sliderSatrtCoordinate;
    const pointDislocation = coordinateDiference / sliderSize;
    console.log('pointMoveCoordinate', pointMoveCoordinate)
    console.log('sliderSatrtCoordinate', sliderSatrtCoordinate)
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