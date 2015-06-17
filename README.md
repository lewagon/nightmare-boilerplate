# NightmareJS Boilerplate bot

You need [Node.js](https://nodejs.org/) and [Phantom.js](http://phantomjs.org/)
installed on your computer. You also need **git**, a Heroku account and
the [Heroku toolbelt](https://toolbelt.heroku.com/).

## Deploy on Heroku

First create a Heroku app for your bot.

```bash
$ heroku create --region=eu --buildpack=https://github.com/ddollar/heroku-buildpack-multi.git
```

Then, to deploy it (after some commits), just run:

```bash
$ git push heroku master
```

To run the bot on Heroku, just prefix the command you run locally with `heroku run`.
For instance, you get:

```bash
$ heroku run node script.js
```
