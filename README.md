# reslog

Adds a function and an array to the express response object: log() and _log.

Build up the _log array by calling res.log() with a description and whatever objects you want to log, Ex:

res.log('User object', res.locals.session.user)
res.log('Session expires', res.locals.session.expires)

then call res.log() with no arguments to return the object { 'reslog' : (_log array as a formatted JSON string) }:

res.render('view', res.log())

Then put {{ reslog }} in the view, like below the footer