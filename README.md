# react-web-app
A React web app that is built with testing in mind

## How to get started

### Install stuff

```bash
npm init -y
npm i create-react-app
npx create-react-app my-app
cd my-app
npm start
```

### Run the tests that come with our app

* In a new terminal `npm run test`

Now that everything is working, let's push this up to CI so that we can make sure it continues to work on other computers besides ours.

### Create CI Pipeline

* A little about [Github Actions](https://github.com/features/actions)
* Use the UI to setup a Workflow
* Paste in the following

```yaml

```
* Add secret variables
* Commit and watch it 🏃‍♀️