import mongoose from "mongoose";
const ServicosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
 
});

export default mongoose.model("Servicos", ServicosSchema);