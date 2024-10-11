import mongoose from 'mongoose';

const catagoriSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // This assumes you're storing the image URL or path
  lng: { type: String, required: true,   enum: ['en', 'th'], default: "en" },
}, { timestamps: true });

const Catagori = mongoose.models.Catagori || mongoose.model('Catagori', catagoriSchema);
export default Catagori;
