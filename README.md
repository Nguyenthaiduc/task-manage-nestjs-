<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <br />
   <a href="http://postman.com/" target="blank"><img src="https://camo.githubusercontent.com/cfe0dd83317c9b523c7f3d8911ee61eb1e2fc869a64a8b6ae075c2fd6e5b17cd/68747470733a2f2f6173736574732e676574706f73746d616e2e636f6d2f636f6d6d6f6e2d73686172652f706f73746d616e2d6c6f676f2d686f72697a6f6e74616c2d333230783133322e706e67" width="320" alt="Postman Logo" style="margin-left: 30px;" /></a>
   <br />
   <a href="https://www.postgresql.org/" target="blank"><img src="https://icon-library.com/images/postgresql-icon/postgresql-icon-20.jpg" width="320" alt="Nest Logo" /></a>
   <br />
    <a href="https://www.docker.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1280px-Docker_%28container_engine%29_logo.svg.png" width="320" alt="Docker Logo" /></a>
   
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


### Create
```bash
$ nest g module <folder>
$ nest g controller <folder>
$ nest g service <folder>
$ nest g class <folder>

```

### Body
- Send Request ->
```json
body { title: 'Learn Nest', description: 'Nestjs' }
```
- `@Body` nhận bất kì field nào
- `@Body('title')` nhận field title 
```ts
(@Body('title') title: string, @Body('description') description: string)
```
### Data Transfer Object (DTO)
```bash
$ npm install class-validator
$ npm install class-transformer
```
### Docker
```bash
$ docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
$ docker container stop postgres-nest
$ docker container rm postgres-nest
```

### Object Relational Mapping (ORM)

### QUERY
```ts
const query = this.createQueryBuilder('task');

    if(status) {
      query.andWhere('task.status = :status',{ status: 'OPEN' }); //&&
    }
```
- :status là bảng status

### TOOLS
- SHA256

### PACKAGE
- class-validator
- class-transformer
- typeorm
- @nestjs/typeorm
- pg
- bcrypt
- @nestjs/passport
- @nestjs/jwt
- jwt
- passport
- @nestjs/config

### Deployment Heroku
```bash
$ npm i -g heroku
$ heroku login
$ heroku addons:create heroku-postgresql:hobby-dev -a task-management-ntd
$ heroku git:remote task-management-ntd
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ heroku config:set NODE_ENV=production
$ heroku config:set STAGE=prod
$ heroku config:set DB_HOST=<host>
$ heroku config:set DB_PORT=5432
$ heroku config:set DB_USERNAME=yqrzzdtgppzyvi
$ heroku config:set DB_PASSWORD=
$ heroku config:set DB_DATABASE=d4mcmep5jmk75
$ heroku config:set JWT_SECRET=Ktd8UeZ3ewny3XBWSw5vLLCckAVPEPcatqJQxGpj4cpvwqhzueMS7LDajDqTCkE4
$ git push -f heroku HEAD:master
$ heroku logs --tail
```