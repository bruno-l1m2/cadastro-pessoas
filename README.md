# Projeto Cadastro de Pessoas
BackEnd / FrontEnd / Banco de Dados / Docker

Requisitos

•	Docker

•	Faça o clone deste repositório

•	OpenJDK 17

•	Node 12+

Repositórios 

•	https://hub.docker.com/repository/docker/brunol1m2/api-backend

•	https://hub.docker.com/repository/docker/brunol1m2/app-frontend

•	https://github.com/bruno-l1m2/cadastro-pessoas.git

Processos automatizados

Comandos para baixar as imagens do projeto no Docker Hub.

Seguir a ordem abaixo:

•	Repositório do Banco de dados PostgresSQL.
        
        docker pull postgres
        
•	Repositório do BackEnd.
        
        docker pull brunol1m2/api-backend
        
•	Repositório do FrontEnd.
        
        docker pull brunol1m2/app-frontend

Comandos para executar as imagens do Docker:

•	Criando network para comunicação das Dockers. 
        
        docker network create redelocal
    
•	Criando PostegresSQL para o banco de dados.
        
        docker run --name postgres --network redelocal -e POSTGRES_PASSWORD=Blr2151@ -p 5432:5432 -d postgres

•	Criando API para gerenciar o banco de dados e a aplicação.
        
        docker run -p 8080:8080 --network redelocal brunol1m2/api-backend:1.0 

•	Criando aplicação para consulta, cadastro e alteração dos dados.
        
        docker run -p 3000:3000 --network redelocal brunol1m2/app-frontend:1.0	

Arquitetura da aplicação
 
![image](https://user-images.githubusercontent.com/90729848/182098435-235a221b-4cec-4e9c-8b39-a330777d122f.png)

Requisitos

Deverá ser criada uma aplicação de cadastro de pessoas:

1) Back-end
A aplicação, a ser desenvolvida em Java, deverá expor uma API de cadastro, alteração, remoção e consulta de pessoas com as seguintes informações:
Nome - obrigatório
Sexo
E-mail - não obrigatório, deve ser validado caso preenchido
Data de Nascimento - obrigatório, deve ser validada
Naturalidade
Nacionalidade
CPF - obrigatório, deve ser validado (formato e não pode haver dois cadastros com mesmo cpf)
Obs: a data de cadastro e atualização dos dados devem ser armazenados.
2) Front-end
A aplicação deverá ser acessível via navegador e possuir uma tela com formulário. Não há restrição em relação à tecnologia para o desenvolvimento do frontend.
3) Segurança
O acesso à aplicação só poderá ser realizado por um usuário pré-existente via autenticação basic.
4) Instalação
A aplicação deverá estar disponível em uma imagem docker a partir do docker-hub e não deve exigir configurações/parâmetros. Ou seja, ao rodar a imagem, deve levantar a aplicação e funcionar.
5) Código fonte
A aplicação deverá possuir um endpoint /source acessível sem autenticação via HTTP GET que deverá retornar o link do projeto no github com o código fonte do projeto desenvolvido.
