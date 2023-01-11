# Project description:
The motivation behind the project is the **Travel.Explore.Experience mindset**.
This is a unique website for Travelers where the search engine provides detailed information about places you can visit.

# How to explore the website?:
1) Click on Login/Sign Up button once website is loaded.
2) You can enter any string as user name and password and click on Log in (Blanks are not allowed).
3) You will be redirected to search engine page.
4) Enter any city name in **USA**.
5) Select a category to explore.
6) Hit the search button to see if city info and city place details loads through api.
7) Click on accordian title to load single place details and display.
8) Official website, Wikidata and Google Maps links will be shown if data is available. Clicking on them will open new tab to show additional information.
9) *Please note that sometimes description or images are not displayed for few places as they are not available on OpenTripMap database.

# Future work:
1) Implement appropriate authentication.
2) Render address and weather information for the city/places.
3) Enable the website to search international destinations.

# API Description:
The project uses **OpenTripMap** apis which are available under the Open Data Commons Open Database License (ODbL) as mentioned on https://opentripmap.io/product.

OpenTripMap requires you to register on the website to get API KEY which can be used to invoke various api's provided.

API's used (refer to services.js to see invokation methods)
1) Geographic coordinates request: returns coordinates for the given placename (city, village, etc.)
2) Place list: returns a list of places based on a location, type, rate and other parameters
3) Place Details: returns detailed information about a specific place, such as address, description, url, image and others

# Complex elements
1) Menubar shows search engine menu only if user is logged in.
2) Menubar shows logout option only if user is logged in.
3) App component uses React Router to move around different views.
4) LogInOrSignUp component dynamically loads login, sign up and logout views.
5) SearchEngine component loads city information and places list if the city and places are available on a single click.
6) Search button on SearchEngine shows loading indicator for city information and location details if the city information is not already present in useState.
7) Loading location details in accordian shows loading indicator if the details are not present in useState.
8) The places details are loaded in accordian using the sample accordian that was provided to us before.
9) The city information, city location list and city place details are loaded only once and stored in useState variables.
10) The website view is optimized for 320px, 375px, 425px and above. Please refer to App.css, index.css and grid.css.
11) Used transition effect on menu bar.
12) Used 12 column grid.

# Images and Icons
1) Logo.svg: Provided by default.
2) banner.png: Seven Magic Mountains picture clicked by me.
3) logo.JPG: Created by me.
4) logo.GIF: Created by me.
5) OurTeam.png: Created by me.
