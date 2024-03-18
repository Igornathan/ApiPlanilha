const PlanilhaService = require('../services/PlanilhaService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {
            error:'', result:[]
        };

        let planilha = await PlanilhaService.buscarTodos();

        for(let i in planilha){
            json.result.push({
                codigo: planilha[i].idProdutos,
                descricao: planilha[i].Produtos,
                quantidade: planilha[i].Quantidade,
                preco: planilha[i].Valor
            }); 
        } 
        res.json(json);
    }
}