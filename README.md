# angular-app-starter-kit
Um boilerplate para iniciar um projeto AngularJs com Gulp e Sass

## Sobre o AngularJs
O AngularJs é um poderoso framework para desenvolvimento web e móvel que nos permite construir aplicativos complexos, e através do seu vasto cardápio de componentes, fornece-nos subsídios suficientes para a construção rápida e eficiente de apps.

## Instalação
Clone o projeto e lhe de o nome do seu próprio projeto:

```
git clone https://github.com/wgbn/angular-app-starter-kit.git [nome-do-seu-projeto]
git remote remove origin
git remote add origin [endereço-do-seu-reposítorio-próprio]
npm install && bower install
```

## Comando para usar durante o desenvolvimento

### Criação de novas telas
```
gulp tela .................................. Cria uma nova tela no projeto. Uma tela possui um controller, um router, um style e um template
    [--name <nome-da-tela>] ................ O nome da tela a ser criada. ex.: --name minha-tela
    [--rota <nome-da-rota>] ................ O nome da rora para acessar a tela. ex.: --rota minhatela (no browser ficará /minhatela)
    [--class <nome-da-classe-css>] ......... O nome da classe para estilizar a tela. ex.: --class minha-classe
    [--path <caminho-para-instalação>] ..... O caminho de criação da tela. ex.: --path telas/post (o path padão é 'telas')
    [--app <nome-do-app>] .................. O nome do seu app. ex.: --app my-app (o padrão é 'app')
    
    Exemplo de comando:
    gulp tela --name minha-tela --rota minhatela --class minha-classe --path telas/post
```

### Criação de diretivas
```
gulp diretiva .............................. Cria uma nova diretiva no projeto. Uma diretiva possui um controller, um style e um template
    [--name <nome-da-diretiva>] ............ O nome da diretiva a ser criada. ex.: --name meu-componente
    [--desc <descricao>] ................... Uma descrição para a documentação da diretiva. ex.: --desc "este é meu component"
    [--class <nome-da-classe-css>] ......... O nome da classe para estilizar a diretiva. ex.: --class minha-classe
    [--path <caminho-para-instalação>] ..... O caminho de criação da diretiva. ex.: --path telas/post (o path padão é 'common/directives' para diretivas globais)
    [--app <nome-do-app>] .................. O nome do seu app. ex.: --app my-app (o padrão é 'app')
    [--vm <nove-da-view-model>] ............ O nome da view-model que será usada no ContellerAs. ex.: --vm vm (o padrão é 'vm')
    [--scope "<nome-do-paramatro>: '<tipo>'"] . O parametro recebido pela diretiva e o seu tipo. ex.: --scope "slide: '='"
    
    Exemplo de comando:
    gulp diretiva --name meu-componente --desc "um componente" --class minha-classe --path telas/post
```

### Criação de serviços
```
gulp service ............................... Cria um novo serviço no projeto. Uma serviço possui um controller uma função link
    [--name <nome-do-servico>] ............. O nome do serviço a ser criado. ex.: --name meu-servico
    [--desc <descricao>] ................... Uma descrição para a documentação do serviço. ex.: --desc "este é meu serviço"
    [--path <caminho-para-instalação>] ..... O caminho de criação do serviço. ex.: --path telas/post (o path padão é 'common/services' para serviços globais)
    [--app <nome-do-app>] .................. O nome do seu app. ex.: --app my-app (o padrão é 'app')
    
    Exemplo de comando:
    gulp service --name meu-servico --desc "um serviço" --path telas/post
```
