const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// disables strict query behavior if you run it before the schemas are created. 
// After the schemas are created, changes to this property is ignored.
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;