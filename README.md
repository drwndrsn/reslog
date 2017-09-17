# reslog

Adds a function and an array to the express response object: log() and _log.

Build up the _log array by calling res.log() with a description and whatever objects you want to log, Ex:

```javascript
res.log('User object', res.locals.session.user)
res.log('Session expires', res.locals.session.expires)
```

then call 

```javascript
res.log() 
```

with no arguments to return an object { 'reslog' : (_log array as a formatted JSON string) } which you can then pass into a view

```javascript
res.render('view', res.log())
```

Then put {{ reslog }} in the view, like below the footer
