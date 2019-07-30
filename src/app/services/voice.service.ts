import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ArtyomService } from './artyom.service';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {
  constructor(private router: Router, private jarwis: ArtyomService) {
    this.jarwis.say('Hello World !');
    this.jarwis.addCommands([
      {
        indexes: ['Hello', 'Hi', 'is someone there'],
        action: i => {
          jarwis.say('Hello, it is me');
        }
      }
    ]);
  }

  goToAppList(): void {
    this.router.navigate(['/apps']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
