#!/usr/bin/env node

try {
    require('cli-config').run({
        dirname: __dirname,
        clone: true,
        cli: {
            boolean: {
                'v': 'verbose',
                't': 'localTunnel'
            },
            string: { 
                'n': 'appName',
                'd': 'appDomain'
            },
            // map options into commands
            alias: {
                '--version': 'version'
            }
        },
        cmdTree: require('./lib')
    });
} catch (ex) {
    console.error(ex);
    process.exit(1);
}
