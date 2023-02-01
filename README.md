# Frontend Developer Challenge

> Move fast and break things
> *Mark Zuckerberg*

## How to run project?
1. Open the projects and install packages using command below (NodeJS is required):

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
  - `https://api.chimoney.io/v0.2/info/assets` API endpoint is used (hope it's a good endpoint because secret API key wasn't needed)
  - `giftCardsRLD` key in the API is used to display products
  - application is displaying only 20 products for now (array is sliced), therefore the pagination is not needed
3. Added indicator displaying the number of products in the cart (better UX)

## My approach to building the product
1. I knew I wanted to build the full experience app (all pages) with the data from API. I started with the exploration of API. There was a requirement to use `gift cards` as products to display in the app. During my exploration phase I've found that `giftCardsRLD` key field contains data and can be used. **However, I wasn't able to find the price for the gift card product, so the price is not shown in the app.**

2. After the exploration of data I did a research of the current and successful running e-commerce businesses in order to get an inspiration for the app and get a better understanding of the online shopping process. With the thousand of online stores, Shopify and WooCommerce websites, the online shopping process is pretty standardized and it's better to follow the standard steps because users are used to it.  

3. I drew several screens using pencil and paper to give my ideas more concrete form. Several wireframes were born

4. Because I didn't have much time to move from wireframes into designing phase where I would design screens, I decided to create React project and start coding. Luckily, I have an experience with amazing CSS framework called TailwindCSS which allowed me to rapidly build beautiful UI.

5. In the coding phase I have created the core functionality first, which was adding / removing products and updating quantity. I continued with building pages and moving repetitive parts of code into components.

6. Once I was almost done with the project, I've added a simple circle indicating the number of products in the user's cart.

## Possible improvements
1. **Cache:** Cache products after the first fetch of the API endpoint to prevent loading states. Possible solutions:
  - `Redis`: database for caching
  - `localStorage`: depending on the size of data we can save data in the client's browser. However, limit is 5MB for app.

2. **Pagination:** Implment pagination in order to display all products. We can implement 2 approaches to pagination:
  - download all data and display only small portion of data to make better user experience
  - download data on the fly when the user request other page of data

3. **Next.js:** Use Next.js to create better and well optimized application for production.
  - React is just a library and in order to build a production ready app you need to tweak react, add more scripts and configuration to make it production ready. NextJS provides all features baked inside to create production ready apps.

4. **Accessibility:** We should keep in mind that web and app are used even by people with disabilities. We should check the app whether it can be read by screen readers or any other assistive technology. We should also check contrast of colors and whether the chosen colors are good for people with color disabilities

5. **SEO:** React does not provide great search engine optimizations for Google and other search engines. Solutions:
  - `react-helmet`: manages all changes to plain HTML tags and optimize them for SEO
  - `Next.js`: we can use SSR or SSG to get better optimizations for search engines 

6. **Tests and TDD:** When working within the team building an app, it's really important to practice TDD (Test0driven development). We should create tests and than write code. We should also create all types of tests such as `unit` test, `integration` tests and `end-to-end` tests to make sure the app is working properly and without bugs

## Exploration of API (Gift cards)

To access gift cards, use API endpoint: `https://api.chimoney.io/v0.2/info/assets` and follow JSON key values below:

```text
'data' --> 'giftCardsRLD' --> 'content'
```

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
