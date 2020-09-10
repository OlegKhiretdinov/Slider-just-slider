export class Observer {
  pointsValue
  subscribers

  constructor(pointsValue:[number]) {
    this.pointsValue = pointsValue;
    this.subscribers = []
  }

  subscribe(fn: () => void):void {
    console.log(typeof this.subscribers)
    this.subscribers.push(fn);
  }
}