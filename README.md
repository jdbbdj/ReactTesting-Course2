--------------ESLINT--------------
|Popular linter for Javascript
|Linting keeps code style consistent(for multiple engineers on project)
-Linter:analyzes static text and marks syntax that breaks rules
-Static:analyze code as written, not what happens when code is run
-Linting also catches errors in code
|using variable before defining
|importing from non existing file

------Linting vs Formating----------
Formatters(like prettier) automatically format code(indents, spacing)
-example:spaces around curly braces
import {useEffect} from 'react'; into import { useEffect } from 'react';

LInters address format and style
-example:preferred assertion method

expect(checkbox).tohaveAttribute(checked);
into
expect(checkbox).toBeChecked();

|ESLint Plugins
Testing Library and jest-dom ESLint plugins
-Enforce best practices
https://github.com/testing-library/eslint-plugin-testing-library
https://github.com/testing-library/eslint-plugin-jest-dom

-------------------COURSE2: Sundaes on demand----------------
Customers can do:
|Choose icecream flavors and toppings and submit order
|Flavors and toppings comes from server
|Order is sent to server

Backdrop to Test:
|more comples user interactions:mutiple form entry, moving through order phases
|mouseover popup: test that element disappears from DOM
|simulating server response: mock service worker
|async app updates: awaiting DOM changes
|global state via context

Order Phase State(App-Level)

inProgress-Review-completed-inProgress

HOW ARE WE GOING TO SIMULATE MOUSEOVER?
DO WE USE FIREEVENT? BETTER USE USEREVENT

|UserEvent
-is much more efficient for interactions that is much more related to the user experience itself

screen Query Methods
command[All]ByQueryType

these command are:
get: expect element to be in DOM
query: expect element not to be in DOM
find: expect element to appear async

[All]
_(exclude) expect only one match
_(include) expect mroe than one match

QueryType
|Role(most preferred)
|AltText(images)
|Text(display elements)
Form elements
|PlaceholderText
|LabelText
|DisplayValue

SummaryForm Review
*(review) testing flow where checkbox controls whether button is disabled
*mouseover for terms and conditions
|userEvent.hover and userEvent.unhover
|queryByText to and expect () .not.toBeInTheDocument() for element starting out not on page
where as query for specifically used to throw success if the element is not on page whereas
getByText throws fail when that text isnot on page

|async waitForELementToBeRemoved for elemnt that was there and then disappearred
*test not wrapped in act(...) warning
*Determine howcomponent is getting updated async and account for in test

-------------------------OrderEntry-------------------------
Objectives:
|Test that option images render
|Mock Service Worker
|Mock server response for /scoops and /toppings
|write "scoops" code together
|"toppings" code as code quizz

Mock Service Worker
\*functional test dont involve with server

Purpose
|intercept network calls
|return specified responses
Prevents network calls during tests
Set up test conditions user server response

Setup and Requirements
npm install msw
1.Create handlers
2.Create test server
3.Make sure test server listens during all tests
|reset after each test

Steps:
Handler Type: rest or graphql
HTTP method to mock: get, post etc
|Full URL to mock
req:request object
res:function to create response
ctx:utility to build response

SETTING UP:
handlers.js ->server.js->src/setUpTest.js

on the .test.jsx you will call the handler's api

--------------Server Errors: Planning-----------------
Fill in the catch statement of axios
Display AlertBanner component if axios call throws error
-instead of content from server
|Use simple react-bootstrap alert
role:alert
By default, handlers return non-error response
|Override with error response for particular tests

Jest Debugging Tools

Simulating Server Error Response in Tests(Isolate your test to debug easily failing test)
Override Mock Service worker response for individual tests
Isolate file by typing p in Jest watch mode
Isolate test within file with test.only or test.skip
waitFor for tests where await findBy isn't enough
