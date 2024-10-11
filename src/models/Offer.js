import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // This assumes you're storing the image URL or path
  lng: { type: String, required: true,   enum: ['en', 'th'], default: "en" },
}, { timestamps: true });

const Offer = mongoose.models.Offer || mongoose.model('Offer', offerSchema);
export default Offer;
