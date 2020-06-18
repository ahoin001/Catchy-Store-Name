const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

// If not in production (we are in devlopment or testing) , load .env into proccess environment for use with config
if (process.env.NODE_ENV !== 'production') require('dotenv').config()


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express();

// ? Heroku provided port, or port 5000 for testing
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ? Allow access from our origin
app.use(cors())

if (process.env.NODE_ENV === 'production') {

    // static allows serving a file, path used to get dir name, and serve it all files in the client/build folder
    app.use(express.static(path.join(__dirname, 'client/build')))

    // Return client build index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

}

app.listen(port, (error) => {
    console.log('App listening on port ' + port);
});

// ************************************************************************************************
//      Routes
// ************************************************************************************************


app.post('/payment', (req, res) => {

    // ? Create body from request token
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body,
        // stripe charges api will return error or on success will return a charge object
        (stripeError, stripeResponse) => {
            if (stripeError) {
                res.status(500).send({ error: stripeError });
            } else
                [
                    res.status(200).send({ success: stripeResponse })
                ]
        }
    )

});