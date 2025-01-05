// Problem Statement: Write a function called calculatePrice that prompts the user for two inputs: price and discount.
//  If the user doesn't provide a discount (i.e., leaves it blank), the function should apply a default discount of 10%.
//  If the user provides an invalid price or discount (e.g., a negative number or non-numeric input), it should display
// an error message and prompt them to try again.

// Finally, the function should calculate and return the final price after applying the discount.

// Requirements:

// Use default parameters for the discount. Validate both inputs to ensure they are positive numbers.

function calculatePrice() {
  let price = +prompt("please, enter the price :");
  let discout = +prompt("please, enter discout too :");

  if (price < 0 || typeof price != typeof 1) {
    price = +prompt("ERROR, price type again :");
  } else if (discout < 0 || typeof discout != typeof 1) {
    discout = +prompt("ERROR, discount type again :");
  }

  if (discout == null || discout == "") {
    discout = 10;
  }

  let finalPrice = (discout / 100) * price;
  return finalPrice;
}

console.log(calculatePrice());
