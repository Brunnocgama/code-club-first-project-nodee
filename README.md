# codeclub-first-project-node

<img src="https://rodolfomori.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/LOGO_1-pl6s0w83bob17fyv2myc9hccfjkrd6md916y3lfbcg.png.webp"
    alt="imagem-dev-club width"42">

<h1>Challenge CodeClub</h1>

<h2> 🚀 Desafio Node Proposto pelo Rodolfo Mori 🚀 </h2>

<strong>
    <h2>Rotas</h2>
</strong><br>
<ul>
    <li>GET /order: Rota que lista todos os pedidos já feitos.</li>
    <li>PUT /order/:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do
        pedido deve ser enviado nos parâmetros da rota.</li>
    <li>DELETE /order/:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.</li>
    <li>GET /order/:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.</li>
    <li>PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do
        pedido recebido pelo id para "Pronto".</li>
</ul><br>

<strong>
    <h2>Exemplos:</h2>
</strong><br>

<p>Se eu chamar a rota POST /order repassando { order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José",
    price: 44.50 }, o array deve ficar assim:

    [
    {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José",
    price: 44.50,
    status:"Em preparação"
    }
    ];
    Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array deve ficar assim:

    [
    {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José",
    price: 44.50,
    status:"Pronto"
    }
    ];
</p><br>

<strong>
    <h2>Middlewares</h2>
</strong><br>
<ul>
    <li>Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o
        ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
    </li>
    <li>Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da
        requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.</li>
</ul><br>
<strong>
    <h2>Exemplo</h2>
</strong><br>
<ul>
    <li>[GET] - /order</li>
</ul><br>
