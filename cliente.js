class Cliente {

	constructor( id, nome, cpf, cnpj ) {
		this.id   = id;
		this.nome = nome;
		this.cpf  = cpf;
		this.cnpj = cnpj;
	}
	
	static idClientePesquisa( id, listaClientes ) {

		let clt = new Object( );

		listaClientes.forEach( cliente => {
			if( id == cliente.id ) {
				clt = cliente;
			}
		});
		return clt;
	}

	static cpfcnpjClientePesquisa( cpfcnpj, listaClientes ) {

		let clt = new Object( );

		listaClientes.forEach( cliente => {
			if( cpfcnpj === cliente.cpf || cpfcnpj === cliente.cnpj ) {
				clt = cliente;
			}
		});
		return clt;
	}

}

module.exports = Cliente;
