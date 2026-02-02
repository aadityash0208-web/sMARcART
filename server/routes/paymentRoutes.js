const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

// --- HARDCODE YOUR KEYS HERE FOR TESTING ---
const KEY_ID = "rzp_test_S7xQc1NW5KiExe";      // <-- Paste Key ID here
const KEY_SECRET = "wXAlfbw8fWJCu9pMGBt7YlLH";       // <-- Paste Key Secret here

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: KEY_ID,
  key_secret: KEY_SECRET
});

// 1. CREATE PAYMENT ORDER (Initiate)
router.post('/orders', async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.log("Razorpay Error:", error);
    res.status(500).send(error);
  }
});

// 2. VERIFY PAYMENT (Check Signature)
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', KEY_SECRET) // Uses the hardcoded secret
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      res.json({ message: "Payment Verified", success: true });
    } else {
      res.status(400).json({ message: "Invalid Signature", success: false });
    }
  } catch (error) {
    res.status(500).send("Error verifying payment");
  }
});

module.exports = router;