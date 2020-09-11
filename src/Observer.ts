export class Observer {
  subscribers

  constructor() {
    this.subscribers = []
  }

  subscribe(fn: () => void):void {
    this.subscribers.push(fn);
  }

  broadcast():void {
    this.subscribers.forEach(element => {
      element()
    });
  }
}