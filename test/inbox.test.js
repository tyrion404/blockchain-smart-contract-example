const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    //Get a list of all accounts;
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        .send({ from: accounts[0], gas: '1000000' });
    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploy', () => {
        assert.ok(inbox.options.address);
    });
    it('Has a message', async () => {
        const message = await inbox.methods.getMessage().call();
        assert.equal(message, 'Hi There!');
    });
    it('can change a message', async () => {
        await inbox.methods.setMessage('Bye!').send({ from: accounts[0]});
        const message = await inbox.methods.getMessage().call();
        assert.equal(message, 'Bye!');
    });
});