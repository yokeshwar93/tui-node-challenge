# Assumptions

- Since the Product type did not have discountPercentage and stock attirubutes, I have not validated for stock and applied discount to the product price while adding it to the cart.
- If the user tries to add a product already in cart the api will throw a Bad request response along with the proper error message.
- I have used the default sort function of javascript since the time complexity is O(n log n).

# Available scripts

### Run
`npm run dev` 

### Test
`npm run test`

# Libraries Used

- node-fetch
- http-errors

