NODE3: Signup Form
Objective
Create an express app that presents the user with a signup form

Resources
nodejs.org
expressjs.com
demo-code-scaffold
Requirements
Create a route that sends the following text to the user in response to requesting '/': ```

```

Run the web server and verify that the form displays when you request '/' page in your browser.

Add a new route to your app.js file that handles the "/formsubmit" path by using app.post(...).

? Test: This will only handle POST requests, so if you enter "/formsubmit" into your browser you will receive a 404 response. This is because typing urls in the address bar of your browser always generates a GET request. Express routes have to match both the url and the method (GET, POST, PUT, DELETE).

When the user submits the form, redirect them to a new route called '/success' using res.redirect. This route should simply send a message to the user that says "Success!".

Restart your server and navigate to the home page. Submit the form and verify that you are redirected to the success page. When you hit refresh on the success page it should simply refresh the message without submitting the form data again.
$ Success! You implemented a technique called Post/Redirect/Get. By handling the form submission then redirecting the user to a different route, they can refresh the page without resubmitting the form.

COMPLETE
