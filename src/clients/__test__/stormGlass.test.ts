import { StormClass } from '@src/clients/stormGlass';

describe('StormClass client', () => {
  test('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    const stormGlass = new StormClass();
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({})
  });
});
