import { StormClass } from '@src/clients/stormGlass';
import axios from 'axios'

jest.mock('axios');

describe('StormClass client', () => {
  test('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    axios.get = jest.fn().mockReturnValue({});

    const stormGlass = new StormClass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({})
  });
});
