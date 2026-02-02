const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/smartcart')
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

const makeAdmin = async () => {
  const email = "aakashmy0208@gmail.com"; // YOUR EMAIL HERE
  
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.role = "admin";
      await user.save();
      console.log(`✅ Success! ${user.name} is now an ADMIN.`);
    } else {
      console.log("❌ User not found. Check the email.");
    }
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

makeAdmin();