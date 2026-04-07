🍔 InfnetFood - Delivery App
O InfnetFood é uma aplicação mobile de delivery desenvolvida em React Native. O app permite navegar por categorias de lanches, gerenciar um carrinho de compras, realizar checkout com simulação de entrega e acompanhar pedidos recentes.

🚀 Funcionalidades
Autenticação Simples: Sistema de login e perfil de usuário.

• Catálogo Dinâmico: Produtos carregados via API externa (GitHub).

• Carrinho de Compras: Adição e remoção de itens com cálculo de total em tempo real.

• Modo Dark/Light: Alternância de temas via Context API.

• Mapa Interativo: Visualização de restaurantes parceiros usando Leaflet.

• Notificações: Simulação de status do pedido (Cozinha -> Entrega -> Concluído).

🛠️ Tecnologias Utilizadas
React Native

• Expo

• React Navigation

• Context API (Gerenciamento de Estado)

• Lottie React Native (Animações)

• React Native WebView (Para o Mapa)

📦 Como instalar e rodar o projeto
Pré-requisitos
Antes de começar, você vai precisar ter instalado:

• Node.js

• Expo Go no seu celular (para testar) ou um emulador configurado.

Passo a passo
1. Clone o repositório:

Bash
git clone https://github.com/seu-usuario/lanches.git

2. Entre na pasta do projeto:

Bash
cd lanches

3. Instale as dependências:

Bash
npm install
# ou
yarn install

4. Inicie o servidor do Expo:

Bash
npx expo start

5. Abra o app:

• Escaneie o QR Code com o app Expo Go (Android) ou com a Câmera (iOS).

• Ou pressione w para abrir no navegador (Web).

📄 Estrutura de Arquivos
Plaintext
src/
 ├── assets/        # Imagens e animações Lottie
 ├── context/       # Provedores (Cart, Theme, User, Order)
 ├── services/      # Notificações e chamadas de API
 └── screens/       # Telas da aplicação (Home, Cart, Checkout, etc)
🔗 APIs Utilizadas
Os dados de produtos e categorias são consumidos de:

• https://raw.githubusercontent.com/samuelvaleriano/lanches/main/lanches.json

Feito  por Samuel Valeriano
