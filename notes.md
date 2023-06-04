# Nest JS

## Install Nest JS CLI :

```bash
npm install -g @nestjs/cli
```
> Installing NestJS CLI globally using NPM


## Check Nest JS installation via version checking
```bash
nest --version
```

## Create new nest project

```bash
nest new <project_name>
```

```bash
nest new my-first-app
```

## Go to app dir

```bash
cd my-first-app
```

## Open vs code in app dir
`code .`

## Run / Start app

```
npm run start
```
> By default app will run on server at port 3000 and the app will by default print "Hello World!"

## Start app in watch mode

```
npm run start:dev
```
> By default app will run on server at port 3000 and the app will by default print "Hello World!"

## Module

- A base or root module by default is App module. Each module have 3 files for one is module file, one is controller file and one is service file eg: for app module its app.module.ts (a module file), app.service.ts (a service file) and app.controller.ts (a controller file)

- Main file or module file (eg app.module.ts) consists of configurations for particular module.

- Services file (eg app.service.ts) consists of logics for application.

- Controller file (eg app.controller.ts) do mapping of different routes with respective services/logics in app.service.ts

## Create a new module

```
nest g module <module_name>
```

```
nest g module book
```

- Nest js automatically link newly created module with main/root module i.e app.module.ts. For some reason if it's not done automatically, do it manually.

```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

- Generate controller file for new module

  ```
  nest g controller <module_name>
  ```

  ```
  nest g controller book
  ```

- Generate controller (--no-spec flag : without spec or test files)

  ```
  nest g controller <module_name> --no-spec
  ```

  ```
  nest g controller book --no-spec
  ```

- Generate service file for new module

  ```
  nest g service <module_name>
  ```

  ```
  nest g service book
  ```

- Generate service (--no-spec flag : without spec or test files)

  ```
  nest g service <module_name> --no-spec
  ```

  ```
  nest g service book --no-spec
  ```

## Connect with MongoDB

- Install packages

    - For mongodb
    ```
    npm install mongodb --save
    ```

    - For mongoose
    ```
    npm install mongoose --save
    ```

    - For nestjs mongoose

    ```
    npm install @nestjs/mongoose --save
    ```

    - For configurations (like .env file configurations)

    ```
    npm install @nestjs/config --save
    ```

    - or Install all packages at once
    ```
    npm install mongodb mongoose @nestjs/mongoose @nestjs/config --save
    ```

## For Validation pipe we need to install 2 packages (class-validator and class-transformer)

```
npm install class-validator class-transformer --save
```

## For applying authentication and authorization (using passport)

```
npm install --save @nestjs/passport passport passport-local
```

```
npm install --save-dev @types/passport-local
```

- Bcrypt (bcryptjs)
```
npm install --save bcryptjs
```

- passport-jwt
```
npm install --save passport-jwt
```