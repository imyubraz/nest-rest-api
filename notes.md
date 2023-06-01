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