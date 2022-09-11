## Statically generated frontend for dev.cadizm.com using [Next.js](https://nextjs.org/)

#### Dependencies

The [Words](./pages/words.tsx) and [Wordle](./pages/wordle.tsx) pages require a backend
for API calls. See the [dev-api](https://github.com/cadizm/dev-api#readme) README for
details on how to run locally/containerized.


#### Setup

```shell
$ npm install
```

#### Local development

Run in shell:

```shell
$ npm run dev
```

Run in VS Code:

```shell
Run -> Start Debugging
```

Build and export:

```
$ npm run build
$ find ./out
```

#### Deployment

Install ansible

```shell
$ brew install ansible
```

Deploy to dev.cadizm.com

```shell
$ ansible-playbook --inventory ansible/hosts --limit=dev --user=cadizm ansible/deploy.yml
```
