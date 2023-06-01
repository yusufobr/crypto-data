import adjustNumber from '../helpers/adjustNumber';

describe('adjustNumber', () => {
  it('should format the number with 2 decimal places', () => {
    const number = 8956.5521;
    const adjusted = adjustNumber(number);
    expect(adjusted).toEqual('8,956.55');
  });

  it('should handle zero', () => {
    const number = 0;
    const adjusted = adjustNumber(number);
    expect(adjusted).toEqual('0.00');
  });

  it('should handle strings representing numbers', () => {
    const number = '8956.552';
    const adjusted = adjustNumber(number);
    expect(adjusted).toEqual('8,956.55');
  });
});
