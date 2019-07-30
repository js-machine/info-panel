import { Inject, Injectable, NgZone } from '@angular/core';
import Artyom from 'artyom.js/build/artyom.js';
import { Observable, Subject } from 'rxjs';
import { ARTYOM_CONFIG, Config } from './artyom.config';

@Injectable({
  providedIn: 'root'
})
export class ArtyomService {
  private artyom;
  name = '';
  result$ = new Subject<{ text: string; final: boolean }>();
  constructor(@Inject(ARTYOM_CONFIG) private config: Config, private zone: NgZone) {
    this.artyom = new Artyom();
    if (config.listen) {
      // start immediately
      this.init();
    }
  }

  init(config?: Config) {
    const newConfig = config ? { ...this.config, ...config } : this.config;
    const recognizer = (text, final) => {
      this.result$.next({ text, final });
    };

    if (newConfig.redirectRecognizedTextOutput) {
      newConfig.redirectRecognizedTextOutput = (text, final) => {
        this.zone.run(() => {
          newConfig.redirectRecognizedTextOutput(text, final);
          recognizer(text, final);
        });
      };
    } else {
      newConfig.redirectRecognizedTextOutput = (text, final) => {
        this.zone.run(() => {
          recognizer(text, final);
        });
      };
    }

    if (newConfig.commands) {
      this.addCommands(newConfig.commands);
    }

    this.artyom.initialize(newConfig);
  }

  on(input: string | string[], smart?: boolean): Observable<any> {
    if (!(input instanceof Array)) {
      input = [input];
    }

    // detect smart if not explicitly set
    if (smart === null || smart === undefined) {
      for (const i of input) {
        if (i.indexOf('*') > -1) {
          smart = true;
          break;
        }
      }
    }

    const observable = new Observable(observer => {
      this.artyom.on(input, !!smart).then((index, wild) => {
        // wrap in zone
        this.zone.run(() => {
          observer.next({ i: index, wildcard: wild });
        });
      });
    });
    return observable;
  }

  addCommand(command: {
    indexes: string | string[];
    smart?: boolean;
    action: (i?: number, wildcard?: string) => void;
  }) {
    this.addCommands([command]);
  }

  addCommands(
    commands: Array<{ indexes: string | string[]; smart?: boolean; action: (i?: number, wildcard?: string) => void }>
  ) {
    commands.forEach(command => {
      const givenAction = command.action;
      command.action = (i, wildcard) => {
        // wrap in zone
        this.zone.run(() => {
          givenAction(i, wildcard);
        });
      };
      if (!(command.indexes instanceof Array)) {
        command.indexes = [command.indexes];
      }
    });
    this.artyom.addCommands(commands);
  }

  setName(name: string) {
    this.name = name;
  }

  shutDown() {
    const observable = new Observable(observer => {
      // wrap in zone
      this.zone.run(() => {
        this.artyom
          .fatality()
          .then(() => {
            observer.next(true);
          })
          .catch(() => {
            observer.error('could not stop artyom');
          });
      });
    });
    return observable;
  }

  say(text: string) {
    this.artyom.say(text);
  }

  shutUp() {
    const observable = new Observable(observer => {
      // wrap in zone
      this.zone.run(() => {
        try {
          this.artyom.shutUp();
          observer.next(true);
        } catch {
          observer.error('could not stop artyom');
        }
      });
    });
    return observable;
  }

  simulate(command: string) {
    this.artyom.simulateInstruction(command);
  }
}
