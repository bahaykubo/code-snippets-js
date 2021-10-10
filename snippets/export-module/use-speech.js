const { Say, Ask } = require('./speech');

const say = new Say();
const ask = new Ask();

say.hello();
ask.where();
ask.bye();
say.bye();
