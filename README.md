# NightmareJS Boilerplate bot

You need [Node.js](https://nodejs.org/) and [Phantom.js](http://phantomjs.org/)
installed on your computer. You also need **git**, a Heroku account and
the [Heroku toolbelt](https://toolbelt.heroku.com/).

## Version

This boilerplate works with version **1.8** of Nightmare JS, not the newest `2.x` version.
To get the documentation of the 1.8 version, follow [this link](https://github.com/segmentio/nightmare/tree/baef06b3f47362be8001dbd946305d4b62b83ec6).

## Getting started

First, [download this repository ZIP](https://github.com/lewagon/nightmare-boilerplate/archive/master.zip).

Unzip it, and move the folder from your Download repository to where you usually code.
Open the folder in the terminal (you can `cd` to it). Once in that folder, run:

```bash
$ git init
$ git commit -m "Starting from @lewagon's boilerplate"
```

We need this folder to be a git repository as we're going to deploy it to Heroku.

You can push this repo to GitHub if you wish to share your work or make a backup.
Just go to [this page](https://help.github.com/articles/creating-a-new-repository/).
You can also use the [Mac client](https://mac.github.com/) or [the Windows client](https://windows.github.com/).

## Start coding

Open `script.js` in Sublime Text, and write some JavaScript code. You can
then test your script with the terminal:

```bash
$ node script.js
```

When you are happy with your code, do not forget to commit it!

```bash
$ git add script.js
$ git commit -m "A description of what I just did."
```

(Take 10 seconds to think of meaningful commit messages, it's very important)

## Deploy and run on Heroku

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
