// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.

console.log(process.argv);
const amount = process.argv[2];
const initialCurrency = process.argv[3];
const targetCurrency = process.argv[4];

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.
if (amount === undefined) {
  console.log("Please enter your amount");
  process.exit();
}

if (initialCurrency === undefined) {
  console.log("Please enter your initial currency");
  process.exit();
}

if (targetCurrency === undefined) {
  console.log("Please enter your target currency");
  process.exit();
}
// If any of the required information is missing, display a meaningful message
// and exit the program.

// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/
let USD = 1;
let CAD = 1.25;
const supportedCurrencies = ["USD", "CAD"];

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.
if (supportedCurrencies.includes(initialCurrency) === false) {
  console.log(
    "initial Currency is not supported. The supported currencies are:",
    supportedCurrencies
  );
}
if (supportedCurrencies.includes(targetCurrency) === false) {
  console.log(
    "Target Currency is not supported. The supported currencies are:",
    supportedCurrencies
  );
}
// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.
if (
  supportedCurrencies.includes(initialCurrency) === true &&
  supportedCurrencies.includes(targetCurrency) === true
) {
  let converted_amt;
  if (initialCurrency === "USD" && targetCurrency === "CAD") {
    converted_amt = amount * CAD;
  }

  if (initialCurrency === "CAD" && targetCurrency === "USD") {
    converted_amt = amount / CAD;
  }

  // --------------------------------------------------
  // Step 6: Display results
  // --------------------------------------------------
  // Finally we will display the result as part of a meaningful message.

  // This message should also include the original amount and currency information
  // supplied by the user.
  console.log(
    "The converted rate  for",
    amount,
    initialCurrency,
    "is: ",
    converted_amt,
    targetCurrency
  );
}
