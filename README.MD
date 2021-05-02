# Desafio 1 - Programa FullCycle de Aceleração

Tecnolgias utilizadas
 - node.js
 - mysql
 - nginx

## Descrição do Desafio
Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. Gere a imagem desse container e a publique no DockerHub.

Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.

Crie um repositório no github com todo o fonte do programa e das imagens geradas.

Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.


1. Rodar a imagem mysql
- Criar a network
- docker network pfa_net

- docker run -d -p 3306:3306 --network pfa_net --name mysql_pfa -v /database:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=pfadocker -e MYSQL_DATABASE=pfa -e MYSQL_USER=pfadocker -e MYSQL_PASSWORD=pfadocker adortolan/mysql_pfa

2. Rodar a imagem node
- docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 --network pfa_net --name node_pfa  adortolan/node_pfa

3. Rodar a imagem nginx
- docker run -d -it --network pfa_net --name nginx_pfa -p 8080:80 adortolan/nginx_pfa


4. acesse no navegador [http:localhost:8080]
deverar retonar a seguinte mensagem 
[{"id":1,"description":"Docker"},{"id":2,"description":"Fundamentos de Arquitetura de Software"},{"id":3,"description":"Comunicação"}]

Lições aprendidas neste desafio:
- Criar imagem docker a partir dockerfile
- Criar networks docker
- Publicar imagem no dockerhub
- Criar aplicação nodejs em container
- Criar um banco de dados mysql em container
- Usar o proxy reverso nginx
