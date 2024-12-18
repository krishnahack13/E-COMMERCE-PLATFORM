const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // or 'live' for production
  client_id: 'AdeX1mM5i83h-JHibHIVMjoe8a5JyDHvie2Ac37CORXydvn50Fb9pk06EcYTUlcQOg3UsKzB8Yw9RpKp',
  client_secret: 'ECJo1eDQJZXssnIaaOTdWcOiwQ73c8w9OBtK-AJ8xJJoCQyU922D4IdyRjGynYqNW4g3NUKwVDNhwGd8'
});
