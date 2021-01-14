<h1 align="center">Gobarber API</h1>

<p align="center">
  <img src="https://img.shields.io/badge/test%20coverage-100%25-brightgreen" alt="Test covegare" />

  <img src="https://img.shields.io/badge/languages-2-brightgreen" alt="Languages" />

  <img src="https://img.shields.io/github/license/raulneto90/gobarber-api?logo=license" alt="License"/>

</p>

## :information_source: Sobre o projeto

O Gobarber é uma aplicação de agendamento de serviços de barbearia. Ele foi desenvolvido em NodeJS no curso GoStack da Rocketseat, utilizando o banco de dados PostgreSQL, onde é possível realizar:

### Cadastro de usuários

**RF**

- O usuário deve poder informar seu nome, e-mail e senha.
- O usuário deve poder realizar um cadastro dentro da plataforma.

**RNF**

- A senha deverá ser criptografada utilizando bcryptjs.

**RN**

- Não deverá ter possibilidade de cadastrar 2 usuários com o mesmo e-mail.

### Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia selecionado.
- O prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder visualizar as notificações não lidas.

**RNF**

- Os agendamentos do dia do prestador deve ser armazenados em cache.
- As notificações do prestador devem ser armazenadas no MongoDB.
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io.

**RN**

- A notificação deve ter um status de lida/não lida.

### Agendamento de serviços

**RF**

- O usuário deve poder ver a listagem de todos os prestadores de serviços cadastrados na aplicação.
- O usuário deve poder ver a listagem dos horários disponíveis do prestador selecionado dentro de 1 mês.
- O usuário deve poder listar os horário disponíveis em um dia específico do prestador selecionado.
- O usuário deve poder realizar um novo agendamento com o prestador selecionado.

**RNF**

- A listagem de prestadores deve ser armazenada em cache.

**RN**

- Cada agendamento deve durar 1 hora.
- Os agendamento devem estar disponíveis entre 08h00 e 18h00.
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços consigo mesmo.

### Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha.

**RNF**

- N.A

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário.
- Para atualizar sua senha, o usuário deve informar a senha anterior.
- Para atualizar sua senha, o usuário precisa confirmar a nova senha.

### Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail.
- O usuário deve receber um e-mail com instruções de recuperação de senha.
- O usuário deve poder resetar sua senha.

**RNF**

- Utilizar mailtrap para testar envio de e-mails em ambiente de desenvolvimento.
- Utilizar o Amazon SES para envios em produção.
- O envio de e-mails deve acontecer em segundo plano.

**RN**

- O link enviado por e-mail para resetar senha deve expirar em 2 horas.
- O usuário precisa digitar a nova senha duas vezes para resetar sua senha.

## :computer: Tecnologias utilizadas

- NodeJS
- Express
- uuidv4
- Typescript
- Eslint
- Prettier
- TypeORM
- Jest
- tsyringe
- multer

## :floppy_disk: Como utilizar este projeto

Para baixar e utilizar este projeto é necessário que o Yarn esteja instalado.
No terminal:

```bash
$ git clone https://github.com/raulneto90/gobarber-api
$ cd gobarber-api

# Instalar as dependências do projeto
$ yarn

# Compilar o projeto
$ yarn build

# Iniciar o projeto
$ yarn start
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Feito com ❤ por Raul Neto. Me siga no [Linkedin](https://www.linkedin.com/in/raul-neto-777bb988/)
