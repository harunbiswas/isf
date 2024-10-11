import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  catagori: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // This assumes you're storing the image URL or path
  lng: { type: String, required: true,   enum: ['en', 'th'], default: "en" },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
