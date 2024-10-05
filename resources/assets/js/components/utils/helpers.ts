export const APT_DECIMALS = 8;

export const convertAmountFromHumanReadableToOnChain = (value: number, decimal: number) => {
  return value * Math.pow(10, decimal);
};

export const convertAmountFromOnChainToHumanReadable = (value: number, decimal: number) => {
  return value / Math.pow(10, decimal);
};


export const hexToAscii = (hex) => {
  // Remove the "0x" prefix if present
  const hexString = hex.startsWith('0x') ? hex.slice(2) : hex;

  // Decode the hex string to ASCII
  let result = '';
  for (let i = 0; i < hexString.length; i += 2) {
    result += String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
  }

  return result;
}