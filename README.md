# Search Public GitHub Repositories by Username

#### March 18, 2016

#### By Brad London

## Description

A simple Node.js web application using the GitHub API that allows users to retrieve a list public repositories of any GitHub user that is searched. Epicodus JavaScript week one code review.

## Set-Up Instructions

To run the app locally, you will need to download the project from my github repository: https://github.com/londonb/JSW1CodeReview

#### NPM/Bower Install
Once the project has been cloned onto your local machine, you will need to install the Node & Bower dependencies. On the command line, navigate to the root of the project directory and run the following commands:
* npm install
* bower install

#### GitHub API Key
In order to make GitHub API requests, you will need a key/personal access token.

To create a token, visit the Settings area of your own Github account, select Personal Access Tokens from the sidebar on the left, and click the Generate New Token button in the upper-right corner. Do not check any boxes on the next page, and click Generate Token to get your key.

This key will then need to be placed inside of a ".env" file at the root level of the local project directory.

#### Run the Local Server
On the command line, at the root of the project directory, run the following commands:
* gulp build
* gulp serve

This will concatenate and compile the necessary JavaScript files and then run the local server. It should automatically open the page (located at http://localhost:3000/) in your preferred browser.

## Technologies Used

JavaScript, Node.js, Bower, Gulp, Sass CSS, GitHub API


## Known Errors

This current version will only list up to 100 repositories for a given user. This amount can be adjusted by changing the code in the search.js file on line 4 and change "per_page=100" to any number you prefer.

## License

This software is licensed under the MIT license.

Copyright (c) 2016 Chris Young

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
