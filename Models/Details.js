import mongoose from 'mongoose';

const DetailsSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const DetailsModel = mongoose.model('Details', DetailsSchema);
export default DetailsModel;  // Use 'export default' for ESM
