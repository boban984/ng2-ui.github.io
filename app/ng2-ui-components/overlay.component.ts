import { Component } from '@angular/core';
import {  OverlayManager } from 'ng2-ui';

@Component({
  template: `
    <div class="container page-title">
      <h1>Overlay</h1>
    </div>
    <div class="container">
      <p class="page-title-description">
        Overlay is an on-the-top layer over DOM elements. Commonly this is used to have some feature to show on the top 
        of html or an element and to disappear when action is taken.
      </p>
      
      For example
      <ol>
        <li>Loading Sign</li>
        <li>Tooltip</li>
        <li>Hover Effect</li>
        <li>Etc</li>
      </ol>
      
      <h2>Window Overlay - Modal</h2>
      <div id="window-loading" ng2-overlay-of="window">
        <div style="color:#fff">Loading</div>
        <button (click)="overlayManager.close('window-loading')">Close</button>
      </div>
      <button (click)="overlayManager.open('window-loading')">Show Loading For Window</button>
      
    </div>`
})
export class OverlayComponent{
  constructor(public overlayManager: OverlayManager) {}

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

