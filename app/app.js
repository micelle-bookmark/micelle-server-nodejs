global.rootRequire = function(name) {
    return require(`${__dirname}/${name}`);
};

var app = rootRequire('index');
var config = rootRequire('config');

// var app = require.main.require('app/index');
// var config = require.main.require('app/config');

var bole = require('bole');
bole.output({
    level: "debug",
    stream: process.stdout
});

var log = bole('micelle-server');


log.info('server process starting...');

app.listen(config.express.port, config.express.ip, function (error) {
    if (error) {
        log.error('Unable to listen for connections', error);
        process.exit(1);
    }

    log.info('express is listening on http://' + config.express.ip
             + ':' + config.express.port);
});
