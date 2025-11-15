import mongoose from "mongoose";
const PecasSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true },
});

export default mongoose.model("Pecas", PecasSchema);