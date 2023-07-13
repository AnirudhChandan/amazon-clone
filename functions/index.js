// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  *
//  */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51NRKdkSGdggXhtrcB8ZbigCqipRaMbRZVIJGYGGhAr7tM9fkCqXMaBJL7ubJhfxgDfxaPhYxG3nrtUarNhvhQ76U00zgF0sXPa"
// );

// //API

// //App Config
// const app = express();

// //Middleware
// app.use(cors({ origin: true }));
// app.use(express.json());

// // API Routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Received BOOM!!! for this amount -> ", total);

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//     });

//     // Send the client secret as a response
//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error(error.response.data);
//     response.status(500).send({
//       error: "An error occurred while creating the payment intent.",
//     });
//   }
// });

// // Listen Command
// exports.api = functions.https.onRequest(app);

// //http://127.0.0.1:5001/challenge-940e1/us-central1/api

const stripe = require("stripe")(
  "sk_test_51NRKdkSGdggXhtrcB8ZbigCqipRaMbRZVIJGYGGhAr7tM9fkCqXMaBJL7ubJhfxgDfxaPhYxG3nrtUarNhvhQ76U00zgF0sXPa"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:4242";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1NSlbvSGdggXhtrcMTKNEgBI",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
