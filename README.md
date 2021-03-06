**DELOITTE DIGITAL DEVELOPMENT TEST** 

You’ve been asked to develop a responsive website for a clothing retailer.

The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:  
• £5.00 off your order  
• £10.00 off when you spend over £50.00  
• £15.00 off when you have bought at least one footwear item and spent over £75.00

The prioritised list of user stories is as follows:

As a User I can view the products and their category, price and availability information.

1. As a User I can add aproduct to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping cart.
7. As a User I am unable to add Out of Stock products to the shopping cart.


**INSTALLATION**

You need node.js installed globally:

`$ git clone https://github.com/SkinnyPigeon/Deloitte_Code_Test`  
`$ cd Deloitte_Code_Test`  
`$ npm install`  
`$ npm start`

Navigate to http://localhost:3000/ in your browser.


**TO RUN TESTS** 

From the main directory in your terminal:

`$ cd client`  
`$ npm install`  
`$ cd src/specs`  
`$ mocha basket_spec.js`  
`$ mocha stock_spec.js`  
`$ mocha total_spec.js`  
`$ mocha voucher_spec.js`  

**CODE LAYOUT AND SITE USE**

I have built this in Javascript using the Model, View, Controller pattern. The main files are located in the SRC directory. The app.js file is the entry point for the application via the index.html file found in the Build directory.

The Models directory contains the logic for the various components as well as the stock object which are used to display information about the products. 

The Views directory contains the layout information for the different areas of the website and allows for the layout to change dynamically. 

Within the CSS directory ( found in Build ) there are the different CSS files. The main.css was written for tablet sized screen and the responsive.css file triggers when the screen size has a minimum width greater than 660px.

When adding vouchers to the basket you must use a valid code. These can be found in the arrays within the voucher.js file however I would suggest using:  

"A" for £5 off  
"B" for £10 off  
"C" for £15 off

These are case insensitive.

**APPROACH**

As this was a Front-End project I have used built this app entirely in Javascript. I avoided frameworks as I felt that otherwise I would be bringing in a large codebase that would go mostly unused.  

I desgined the site to be reactive from the start, making sure that wherever possible I stuck to percentage based values in the CSS and also included a breakpoint to make the layout look nice on different screen sizes.
