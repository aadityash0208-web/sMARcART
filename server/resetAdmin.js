const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/smartcart')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log(err));

const resetUser = async () => {
  const email = "aakashmy0208@gmail.com"; 
  const password = "741852963"; // The password you want

  try {
    // 1. Delete the old/broken user
    await User.findOneAndDelete({ email });
    console.log("🗑️ Old user account removed.");

    // 2. Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create the fresh Admin User
    const newUser = new User({
      name: "Aakash Admin",
      email: email,
      password: hashedPassword,
      role: "admin", // <--- FORCE ADMIN ROLE
      mobile: "9999999999",
      address: {
        street: "Admin HQ",
        city: "Mumbai",
        state: "MH",
        zip: "400001",
        country: "India"
      },
      wishlist: []
    });

    await newUser.save();
    console.log(`🎉 Success! New Admin created.`);
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Password: ${password}`);

  } catch (error) {
    console.log("❌ Error:", error);
  }
  process.exit();
};

resetUser();