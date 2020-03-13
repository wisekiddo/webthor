// Using Node.js

const AwakeHeroku = require('awake-heroku');

const awakeHeroku1 = new AwakeHeroku("webthor","3600000")

const awakeHeroku2 = new AwakeHeroku("toolbonetube","3600000")


//your-app-name.herokuapp.com

//period-time : it's time you want to wakeup your heroku app

//Start auto wakeup

awakeHeroku1.start();
awakeHeroku2.start();