/* 
URL: https://www.freecodecamp.org/challenges/validate-us-telephone-numbers

Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false. 
*/

/**
 * Validate US telephone numbers
 *
 * @param {string} str
 * @returns {boolean}
 */
function telephoneCheck(str: string) {
  // https://jex.im/regulex/#!flags=&re=%5E(1%5Cs%3F)%3F((%5C(%5Cd%7B3%7D%5C))%7C(%5Cd%7B3%7D))(%5B%5Cs-%5D)%3F(%5Cd%7B3%7D)(%5B%5Cs-%5D)%3F(%5Cd%7B4%7D)%24
  return /^(1\s?)?((\(\d{3}\))|(\d{3}))([\s-])?(\d{3})([\s-])?(\d{4})$/.test(str);
}

export default telephoneCheck;
