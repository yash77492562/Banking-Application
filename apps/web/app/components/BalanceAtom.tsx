import { atom, selector } from 'recoil';
import axios from 'axios';

// Atom to store balance state
export const balanceState = atom({
  key: 'balanceState',
  default: 0, // Initial balance value
});

// Selector to fetch and update the balance atom
export const fetchAndUpdateBalanceState = selector({
  key: 'fetchAndUpdateBalanceState',
  get: async () => {
    try {
      // Make a GET request to fetch the balance
      const response = await axios.get('http://localhost:3000/api/balance');
        console.log(response , 'response from api/balance')
      // Check if the API call was successful
      if (response.data.success) {
        // Extract the current_balance from the response
        const current_balance = (response.data.current_balance)/100;

        // Return the fetched balance to update the atom
        return current_balance;
      } else {
        // Handle the case where success is false
        throw new Error('Failed to fetch the balance');
      }
    } catch (error) {
      // Handle errors appropriately
      console.error('Error fetching balance:');
    }
  },
});

// Selector to format the balance state
export const formattedBalanceState = selector({
  key: 'formattedBalanceState',
  get: ({ get }) => {
    // Use 'get' to read the current value of 'balanceState'
    const balance = get(balanceState);

    // Format the balance to a currency string
    return balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  },
});
