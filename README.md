# Frontend Developer Challenge

## How to run project?
1. Open the projects and install packages using NPM

```bash
npm install
```

2. Once all packages are installed, run the project by using command:

```
npm run dev
```

## List of libraries / packages used in the project
- `react`: javascript library for building UIs
- `react-router`: lightweight routing library for react
- `react-hook-form`: simple and lightweight forms in react
- `zustand`: simple state management solution for react
- `tailwindcss`: utility-first CSS framework for building UIs fast
- `vite`: next generation front-end tooling (far better and faster than create-react-app)

## Additional features
1. Added full experience (4 pages) with client-side routing
2. Products are loaded from API
  - `https://api.chimoney.io/v0.2/info/assets` API endpoint is used (hope it's good endpoint because secret API key wasn't needed)
  - `giftCardsRLD` key in the API is used to display products
  - for now application is displaying only 20 products (array is sliced), therefore the pagination is not needed
3. Added indicator displaying the number of products in the cart

## My approach to building the product
1. I knew I wanted to build the full experience (all pages) with the data from API. Therefore, I started with exploration of API. In the document there is a requirement to use `gift cards` as product, so I've found that `giftCardsRLD` field contains data. However, I wasn't able to find the price for the product, so price is not shown in the app.  

2. After the exploration of data I did a research of current and successfully running e-commerce websites in order to get an inspiration for the app and has a better understanding of customer experience journey in the online world. 

3. I drew several screens using pencil and paper to give my ideas more concrete form. Wireframes were born

4. Because I didn't have much time to move from wireframes into designing phase where I would design screens, I decided to create project and start coding. Luckily I have an experience with amazing CSS framework called TailwindCSS which allows me to rapidly build beautiful UIs

5. In the coding phase I have created the core functionality first, which was adding / removing products and updating quantity. I continued with 


### What is missing

## How to access giftcards?

`'data' --> 'giftCardsRLD' --> 'content'`

### Example of gift card object

```json
{
  "productId": 13960,
  "productName": "1-800-Flowers.com",
  "global": false,
  "senderFee": 0.5,
  "senderFeePercentage": 0,
  "denominationType": "RANGE",
  "recipientCurrencyCode": "USD",
  "minRecipientDenomination": 5,
  "maxRecipientDenomination": 100,
  "senderCurrencyCode": "USD",
  "minSenderDenomination": 5,
  "maxSenderDenomination": 100,
  "fixedRecipientDenominations": [],
  "fixedSenderDenominations": null,
  "fixedRecipientToSenderDenominationsMap": null,
  "logoUrls": [
    "https://cdn.reloadly.com/giftcards/-30821113-95b4-4bcb-842e-2366ca4c668f1-800-Flowers.com.jpg"
  ],
  "brand": {
    "brandId": 98,
    "brandName": "1-800-Flowers.com"
  },
  "country": {
    "isoName": "US",
    "name": "United States",
    "flagUrl": "https://s3.amazonaws.com/rld-flags/us.svg"
  },
  "redeemInstruction": {
    "concise": "Redeem online at http://www.1800flowers.com",
    "verbose": "This gift card can be redeemed at any of 1800Flowers.com nine brands. &#13;Redeem online at http://www.1800baskets.com, http://www.1800flowers.com, http://www.cheryls.com, http://www.fruitbouquets.com, www.thepopcornfactory.com, www.harryanddavid.com, http://www.berries.com, www.personalizationuniverse.com, http://www.simplychocolate.com, http://www.stockyards.com, http://www.wolfermans.com. Please print out your digital card and present to the store associate."
  },
  "img": "https://cdn.reloadly.com/giftcards/-30821113-95b4-4bcb-842e-2366ca4c668f1-800-Flowers.com.jpg",
  "description": "Redeem online at http://www.1800flowers.com",
  "available": true,
  "code": "giftcard",
  "type": "Gift Cards",
  "name": "1-800-Flowers.com",
  "countryCode": "US",
  "chi_pvd": "rld"
},
```
