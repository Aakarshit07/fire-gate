const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

export function validateAddress(address, amount) {
    const errors = [];
  
    // Address validation
    if (!address.trim()) {
      errors.push('Wallet address cannot be empty.');
    } else if (!ETH_ADDRESS_REGEX.test(address)) {
      errors.push('Invalid wallet address format.');
    }
  
    // Amount validation
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      errors.push('Amount must be a number.');
    } else if (parsedAmount < 0 || parsedAmount > 10000) {
      errors.push('Amount must be between 0 and 10,000.');
    }
  
    return errors;
  }
  

