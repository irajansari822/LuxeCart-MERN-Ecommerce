const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const env = require('dotenv');
const app = express();
 

// middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
env.config();
// stripe api
const Stripe_setup = new Stripe(process.env.Stripe_key);

app.post('/checkout-session',async(req,res)=>{
try{
const { product } = req.body; 

const session = await Stripe_setup.checkout.sessions.create({  

  line_items:[
    {
        price_data :{
            currency: 'usd',
            product_data:{
                name: product.name,
                images: [product.image]
            },
           unit_amount: Math.round(Number(product.price) * 100)
        },
        quantity: 1,
    }
  ],
  mode: 'payment',
  success_url: `${process.env.client_url}/success`,
  cancel_url: `${process.env.client_url}/cancel`
})
res.json({ url: session.url 
 });
}
catch(error){
 res.status(500).json({ error: error.message})
}


})

app.listen(3000,()=>{
    console.log('server is running 3000');
    
})

module.exports = app