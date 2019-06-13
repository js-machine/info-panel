import { app, bootstrap, dispose } from '../setup';

beforeAll(async () => {
  await bootstrap();
});

afterAll(async () => {
  await dispose();
});

it('browser window should be visible', async () => {
  const isVisible = await app.browserWindow.isVisible();
  expect(isVisible).toBeTruthy();
});

it('should show initial window', async () => {
  const count = await app.client.getWindowCount();
  expect(count).toBe(1);
});

it('city should be visible', async () => {
  const visible = await app.client.$('.home-info__city').isVisible();
  expect(visible).toBeTruthy();
});
