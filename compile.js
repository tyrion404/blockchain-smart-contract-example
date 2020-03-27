const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'UTF-8');
module.exports = solc.compile(source, 1).contracts[':Inbox'];
// for solc>=0.5.0
// var input = {
//     language: 'Solidity',
//     sources: {
//         'Inbox.sol' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// }; 
// module.exports = solc.compile(JSON.stringify(input));