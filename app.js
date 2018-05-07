const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Manito Burger Generator Backend!'));

const primaryIngredients = [
      { name: 'Rindfleisch', price: 7.50 },
      { name: 'Hausgemachte Gemüsebulette', price: 7.50 },
    ];

const secondaryIngredients = [
      { name: 'Karamelisierte Zwiebeln', price: 1.0 },
      { name: 'Röstizwiebeln', price: 1.0 },
      { name: 'Champignons', price: 1.50 },
      { name: 'Chorizo pikant', price: 1.50 },
      { name: 'Coleslaw', price: 1.50 },
      { name: 'Jalapeños', price: 1.50 },
      { name: 'Cheddarkäse', price: 3.0 },
      { name: 'Raclette', price: 2.0 },
      { name: 'Gruyère', price: 1.50 },
      { name: 'Ei', price: 2.0 },
      { name: 'Speck', price: 2.0 },
      { name: 'Cheesemix Chäsegge Baden', price: 2.50 },
      { name: 'Extra Fleisch (+170g)', price: 7.50 },
    ];

const sauces = [
      { name: 'Hausgemachte Mayo', price: 1.0 },
      { name: 'Hausgemachte Guacamole', price: 1.0 },
      { name: 'Hausgemachte scharfe Sauce', price: 1.0 },
      { name: 'BBQ Sauce', price: 1.0 },
      { name: 'Café de Paris', price: 1.0 },
      { name: 'Mayo', price: 1.0 },
      { name: 'Ketchup', price: 1.0 }
   ];

const classicBurger = {
  name: 'Classic Burger',
  fixedPrice: 12,
  ingredients: {
      primary: [{ name: 'Rindfleisch', price: 7.50 }],
      secondary: [
          { name: 'Salat', price: null },
          { name: 'Tomaten', price: null },
          { name: 'Zwiebeln', price: null },
          { name: 'Hausgemachte Mayo', price: null }],
  }
};

app.get('/burgers', function(request, response) {
   response.json(200, [classicBurger]);
});

app.get('/ingredients/primary', function(request, response) {
    response.json(200, primaryIngredients);
});

app.get('/ingredients/secondary', function(request, response) {
    response.json(200, secondaryIngredients);
});

app.get('/ingredients/sauces', function(request, response) {
    response.json(200, sauces);
});

app.get('/ingredients', function(request, response) {
   response.json(200, {
      primary: primaryIngredients,
      secondary: secondaryIngredients,
      sauces: sauces
   });
});

app.listen(3001, () => console.log('Example app listening on port 3000!'))