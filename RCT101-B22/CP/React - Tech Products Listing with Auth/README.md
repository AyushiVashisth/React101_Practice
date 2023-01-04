# React - Tech Products Listing with Auth

## Submission Instrions [Please note]

### Maximum Marks - 16

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ App loads correctly - 1 mark
 ✅ Private Route component redirects user to login when visiting /dashboard page without log in - 1 mark
 ✅ Private Route component redirects user to login when visiting /products/:id without log in page - 1 mark
 ✅ Login page works correctly - 4 marks
 ✅ should render Dashoard after successful log in - 4 marks
 ✅ Redirecting from Dashboard page to single product page works correctly - 2 mark
 ✅ Single Product page works correctly 1 - 1 mark
 ✅ Single Product page works correctly 2 - 1 mark
```

## Description

- You need to make an application which lists tech products from an api
- You need to be able to click on a brand name, and move to the single product page `/products/<id>`

## Boilerplate

- You are given a set of `Pages`
  - Home
    - you are given this already
    - it contains links to other routes
    - login, and dashboard routes
  - Login
    - user should be able to login from here
    - use reqres.in api for logging in
    - you need to maintain the user auth state in a context API
  - Dashboard
    - user should be able to see a list of all products fetched from API
    - it should be in tabular format
    - on clicking brand here you should be able to be redirected to the `/products/<id>` page
  - SingleProductPage
    - you need to use dynamic routing to fetch the id and fetch from details from API again
  - AllRoutes
    - all the routes are present here
- `Components`
  - ProductsTable
    - accept `data` property and has a list of ProductsCards
  - ProductCard
    - accept the following props:
    - `brand`
    - `category`
    - `price`
    - `id`
  - PrivateRoute
    - it should show the child component if user is authenticated
    - otherwise move the user to login page
  - AuthContext
    - manage auth context here
    - both user token, and login state
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- You can use the codesandbox link, but please note the test cases will not work on codesandbox ( as codesandbox will not support the version for testing )
  - If you are using codesandbox, you still need to
  - download the project
  - add to your masai-course repo
  - submit the github link on the cp.masaichool.com platform

```
npm install

// test locally
npm run test
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

## Requirements

### `API details`

- `GET` : products list
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/get-tech-products`
- response
  - `data`: array of products
  - `totalPages`: number representing no of pages
- You cannot use JSON server
- use useEffect to display the data on the UI
- `GET` - get products by id
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/get-tech-products/:id`
- response
  - `data`: product information
- example: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/5`

### `Pages & Components`

#### `AllRoutes.jsx`

- It should contain all the routes for your application

```
/ - Home
/login - Login Page
/dashboard - Dashboard - Private
/products/<id> - Products Single Page - Private
```

#### `Home.jsx`

- You dont need to update anything here 
![](https://camo.githubusercontent.com/e96c9ae2ea5745bb963bf5c2f6676a5ff07137a7444eaa817d827a8024c8a158/68747470733a2f2f692e696d6775722e636f6d2f5172756d4c6b612e706e67)

#### `Login.jsx`

- A user should be able to login from here
- There is a form already made for you
- You need to complete it with by using the following api
- `POST`
- https://reqres.in/api/login
- DOCS: https://reqres.in/
- You need to maintain the authentication state in context API
- `isAuth`, and `token`
- token - should be null by default
- isAuth - should be false by default
- once logged in, a user is redirected to `/dashboard` route


![](https://camo.githubusercontent.com/98993b5cff70b2a78a010aff83322533c20691da4949ba783054f295e7c4d41b/68747470733a2f2f692e696d6775722e636f6d2f4d6664504370652e706e67)
#### `PrivateRoute.jsx`

- PrivateRoute
  - it should show the child component if user is authenticated
  - otherwise move the user to `/login` page
  - use from AuthContext to decide if the user is authenticated or not
  
 #### `Loader.jsx`
 - should render loader component when api call is made and yet to complete
 
 

#### `Dashboard.jsx`

- Once logged in, a user sees the this page
- you should have a Logout button [data-testid="logout-btn"]
- once clicking on it, you should be logged out
- there is an element with [data-testid="user-token"]
- you need to display the users token here, which you got when logging in
- List all the products from the API page wise
- you need to display the results using the ProductsTable component, pass the data here from the API response
- loading indicators to be present here


#### `ProductsTable.jsx`

- it should accept a data property, which will contain the array of products
- this is a table component
- from the data property, create a list of ProductCards components
- each of the ProductCard component will have a table row element, and each of the row will contain brand,category and price and id of each product
- loading indicators to be present here

![](https://i.imgur.com/1zeeBRw.png)
#### `ProductCard.jsx`

- it should accept the following properties
  - brand
  - category
  - price
- The elements with the following attributes need to have corresponding values mapped to it
- data-testid="item" - the tr element is here
- the following are td elements
- data-testid="brand" - This should be a Link tag, and on clicking you need to redirect a user from dashboard to singleProduct page
- data-testid="category"
- data-testid="price"

### `SingleProductPage.jsx`

- on clicking brand of any product on dashboard SingleProductPage shouyld be rendered
- should maintain the loading status when api call happens
- make an api request to the tech products url with the respective id and display brand, image,details ,price and category as card.
- the follwoing testids should present in this page for brand,category,image,price and details respectively .
  - data-testid = product-brand
  - data-testid= product-category
  - data-testid= product-image (image should have alt as brand name)
  - data-testid = product-price
  - data-testid = product-details
![](https://i.imgur.com/kohy6vQ.png)

#### `AuthContext.jsx`

- The AuthContext and the Provider should be made here
- user should be able to pass the states for
- authentication isAuth - default value false
- token - default value null
- your value be passing down in the AuthContextProvider as value is { authState, ....otherFunctions }
  - authState should contain the isAuth and token
  - mandatory ^
- create the following functions as well and pass in value object
- loginUser - set auth to true and token to corresponding token
- logoutUser - set auth to false, and token back to null

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
