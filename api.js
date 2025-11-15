import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Pecas from "./CadastroPecas.js"
import Servicos from './CadastroServicos.js'
import cors from 'cors';


dotenv.config()

process.env.MONGO_URI

const app = express()
app.use(cors()); 

const PORT = 3000
//middleare - função que trata informações antes de chegar na rota
app.use(express.json())

const connectDB = async () => {
    try {
   await mongoose.connect(process.env.MONGO_URI)
   console.log("MongoDB connected")}
   catch (error) {
    console.error("MongoDB connection error:", error)
   }    
}
connectDB()

app.get("/", async (req, res) => {
 try {
    const pecas = await Pecas.find()
    res.json(pecas)
 }
 catch (error) {
    res.status(500).json({ message: "Erro ao buscar peças", error: error.message })
   }    
})

app.post("/cadastro",async (req, res) => {
    try{
 const novaPeca = await Pecas.create(req.body)
 res.json(novaPeca)
}
 catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar peça", error: error.message })
   }    
})



//ATUALIZA PEÇAS
app.put("/atualizar/:id", async (req, res) => {
    try {
        const novaPeca = await Pecas.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(novaPeca)    
}
  
    catch (error) {
    res.status(500).json({ message: "Erro ao atualizar peça", error: error.message })
   }    
})
app.delete("/deletar/:id", async (req, res) => {
    try {
        const pecaDeletada = await Pecas.findByIdAndDelete(req.params.id)
  res.json(pecaDeletada)
    }
    catch (error) {
    res.status(500).json({ message: "Erro ao deletar peça", error: error.message })
   }    
})  


//CADASTRO DE SERVIÇOS
app.post('/cadastro-servicos', async (req, res) => {
   try{
      const novoServico = await Servicos.create(req.body)
      res.json(novoServico)
   }
   catch (error) {
      res.status(500).json({message: 'Erro ao cadastrar serviço'})
   }
})

//RETORNA SERVIÇOS
app.get('/lista-servicos', async(req, res)=>{
   try{
        const servicos = await Servicos.find()
    res.json(servicos)
   }
   catch(error){
      res.status(500).json({message: 'Erro ao listar serviços'})
   }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
}       )