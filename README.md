# Frontend para Sistema de Validação de Presença via QR Code

## Sobre

Este repositório contém o frontend de um sistema de validação de presença via QR Code, projetado para ser utilizado em ambientes educacionais. Utilizando uma aplicação mobile desenvolvida com React Native e Expo, os alunos podem facilmente registrar sua presença em aulas e eventos escaneando um QR Code, enquanto os educadores podem monitorar a assiduidade e o engajamento dos alunos de maneira eficiente e automatizada.

## Tecnologias Utilizadas

O projeto foi desenvolvido com o uso de várias bibliotecas e frameworks, incluindo:

- **React Native**: Framework para desenvolvimento de aplicativos móveis nativos utilizando React.
- **Expo**: Plataforma de código aberto para construir e publicar projetos React Native.
- **React Navigation**: Biblioteca para gerenciamento de navegação em aplicativos React Native.
- **Axios**: Cliente HTTP baseado em promessas para fazer requisições a APIs.
- **Expo Barcode Scanner**: Módulo do Expo para implementação de scanner de QR Code.
- **React Native Permissions**: Biblioteca para solicitação de permissões em aplicativos React Native.

## Configuração e Instalação

Para executar este projeto, siga os passos abaixo:

1. Certifique-se de ter o Expo CLI instalado em sua máquina. Se não, você pode instalá-lo globalmente com npm:
```
npm install -g expo-cli
```

2. Clone o repositório para sua máquina local:

3. Instale as dependências:
```
npm install
```

4. Inicie o projeto com Expo:
```
expo start
```

5. Escaneie o QR Code com o aplicativo Expo Go (disponível na App Store e Google Play) para executar o aplicativo em seu dispositivo móvel.

## Funcionalidades

O aplicativo oferece funcionalidades como:

- **Scanner de QR Code**: Permite aos alunos registrar sua presença escaneando um QR Code gerado para a aula/evento.
- **Visualização de Aulas/Eventos**: Os alunos podem visualizar aulas ou eventos disponíveis para registro de presença.
- **Feedback de Confirmação**: Após escanear o QR Code, os alunos recebem um feedback imediato sobre o registro de presença.

