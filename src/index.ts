import * as robot from 'robotremote';
import * as BIP86Libary from './BIP86libary';
// Run this keyword library if the library itself is called explicitly.
if (!module.parent) {
    const options = {
        host: process.argv[2] || 'localhost',
        port: parseInt(process.argv[3], 10) || 8370
    };
    new robot.Server([BIP86Libary], options);
}
