import { InjectionToken } from '@angular/core';

export interface Config {
  lang?: string;
  continuous?: boolean;
  soundex?: boolean;
  debug?: boolean;
  executionKeyword?: string;
  listen?: boolean;
  redirectRecognizedTextOutput?: (text, isFinal) => void;
  commands?: Array<{
    indexes: string | string[];
    smart?: boolean;
    action: (index?: number, wildcard?: string) => void;
  }>;
}

export const ARTYOM_CONFIG = new InjectionToken<Config>('ARTYOM_CONFIG');
