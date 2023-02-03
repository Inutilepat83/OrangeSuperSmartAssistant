import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>Hello {{value}}! How can I help you?</div>
    <input type="text" [(ngModel)]="response" name="response"/>
    <div>{{botResponse}}</div>
  </div>
  `,
})
export class AppComponent {
  value = 'World';
  response = '';
  botResponse = 'hey';
 
  onSubmit() {
    this.botResponse = 'Thanks for your input. I will respond soon!';
  }
}