const adjustNumber = (number) => parseFloat(number).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default adjustNumber;
