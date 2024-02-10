class Produto{
    constructor(nome, preco, descricao, quantidade, foto)
    {
        this.setNome(nome),
        this.setPreco(preco),
        this.setDescricao(descricao),
        this.setQuantidade(quantidade),
        this.setFoto(foto)
    }
    
    setNome(nome){this.nome = nome}
    setPreco(preco){this.preco = preco}
    setDescricao(descricao){this.descricao = descricao}
    setQuantidade(quantidade){this.quantidade = quantidade}
    setFoto(foto){this.foto = foto}

    getNome(){return this.nome}

}

module.exports = Produto