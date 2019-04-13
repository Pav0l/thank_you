const express = require('express');
const app = express();

// Force HTTPS in production
app.use(function(req, res, next) {
  if (
    req.headers['x-forwarded-proto'] !== 'https' &&
    process.env.NODE_ENV === 'production'
  ) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

app.use(express.static('public'));
app.use('/', express.static('index.html'));

app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log('Express app is listening');
});
