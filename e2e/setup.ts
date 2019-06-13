import { join } from 'path';
import { Application } from 'spectron';
const electronPath = require('electron');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

/**
 * creating new Spection application. If you want to use current app, use `app` variable instead
 *
 * @export
 * @returns
 */
export function initSpectron() {
  const baseDir = join(__dirname, '..');
  console.log('electron path', electronPath);

  const application = new Application({
    // @ts-ignore
    path: electronPath,
    args: [baseDir]
  });

  return application;
}
/**
 * instance of the spectron app
 */
export const app = initSpectron();

/**
 * bootstrapping application
 *
 * @export
 * @returns
 */
export function bootstrap(application = app) {
  return application.start();
}

/**
 * stopping your electron application
 *
 * @export
 * @returns
 */
export function dispose(application = app) {
  if (application && application.isRunning()) {
    return application.stop();
  }
}
