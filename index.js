require('dotenv').config();

const server = require('./api/server.js');
const defaults = require('./config/defualt')

const port = defaults.port;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
