# Leilão com Next.js
Este é um caso de uso de leilão implementado usando Next.js, uma estrutura de desenvolvimento React para construir aplicativos da web full-stack. Neste README, vou explicar os principais componentes do projeto e como você pode executá-lo.

# Funcionalidades
1. Leilão
O contrato Challenge.sol implementa a lógica do leilão. Aqui estão os principais pontos:

Os lances são registrados na variável bidders, mapeando endereços para valores.
O lance mais alto é rastreado na estrutura HighBidder.
O leilão tem um tempo máximo definido pelo proprietário.
Os lances só são aceitos antes do tempo máximo.
Se um lance for maior que o lance atual, o endereço do licitante e o valor são atualizados.
Quando o leilão termina, o vencedor recebe os fundos.
2. Componentes Next.js
O projeto Next.js contém os seguintes componentes:

Página inicial (pages/index.js): Exibe informações sobre o leilão e permite que os usuários façam lances.
Componente de licitante (components/Bidder.js): Lida com a lógica de lances e exibe o lance mais alto.
Componente de contador (components/Countdown.js): Mostra o tempo restante até o final do leilão.
Executando o Projeto
Inicie o servidor de desenvolvimento:

Licença
Este projeto está licenciado sob a Licença MIT.
