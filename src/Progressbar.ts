export class Progressbar {
  render(sliderBlock: HTMLElement):void {
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressBar');
    sliderBlock.append(progressbar);
  }
}