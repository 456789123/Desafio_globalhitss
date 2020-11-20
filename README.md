# Desafio_globalhitss
Desafio passado para vaga de desenvolvedor backende


Aqui está o resultado do desafio para avaliação.



Para inicilizar é preciso baixar as libs no npm com o seguinte comando:
npm install

Para iniciar:

node app.js




No caso das melhorias dessa API, como fora introduzido os dados de forma estática, usei somente uma classe de objeto para cliente físico e jurídico(empresas).
A pesquisa de CPF e CNPJ é a mesma.
Se fosse por meio de banco de dados, seria uma classe pessoa que iria estender para pessoa física e jurídica com relacionamento no banco de dados.
Os parâmetros de entrada para salvar novos dados para o cliente seria via POST(REST) para inserção de banco, via PUT(REST) para atualização de dados do cliente e por fim, DELETE(REST) para apagar dados do cliente.
Para a exposição da documentação de end-points eu usei o a API do swagger que será acessado na seguinte URL:
http://localhost:3000/api-docs/ 

Usei a lib "express-healthcheck" para o teste de tempo para a requisição e a seguinte URL que mostra se a aplicação está funcionando normalmente:

http://localhost:3000/healthcheck

Tudo isso está sendo mostrado na documentação do Swagger.

________________________________________

 

Crie uma api com as seguintes caracteristicas:

 - A api deve ser desenvolvida utilizando node.js como linguagem de back-end
 - A api não precisa conectar com uma base de dados real. O retorno pode ser mockado
 - A api deve aceitar somente requisições via json
 - A api deve listar as informações de clientes
 - A api deve permitir listar as informações de um cliente pelo id do mesmo
 - A api deve permitir consultar os clientes por seu tipo (cpf ou cnpj)
 - A api deve conter uma documentação, especificando os parâmetros de entrada, e possíveis retornos

 
Opcional:

 - A api deve prover uma rota de health check
 - Desenvolver um teste de integração que verifica se a api esta retornando por padrão o formato json

 

Após finalizar o teste:

 - O código da aplicação deve ser compactado em um arquivo .zip e enviado a HITSS
 - No e-mail, responder o que melhoria poderia propôr para esta api como parâmetros de entrada, exposição.
