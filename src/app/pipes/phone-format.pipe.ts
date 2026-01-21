import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';
    
    // Convert to string and remove all non-numeric characters
    const phoneNumber = value.toString().replace(/\D/g, '');
    
    // Handle different phone number lengths
    if (phoneNumber.length === 10) {
      // Format: (123) 456-7890
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 11 && phoneNumber[0] === '1') {
      // Format with country code: +1 (123) 456-7890
      return `+1 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    } else if (phoneNumber.length > 10) {
      // Format long numbers with country code
      const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
      const remaining = phoneNumber.slice(phoneNumber.length - 10);
      return `+${countryCode} (${remaining.slice(0, 3)}) ${remaining.slice(3, 6)}-${remaining.slice(6)}`;
    } else {
      // Return as-is if format is not recognized
      return phoneNumber;
    }
  }
}