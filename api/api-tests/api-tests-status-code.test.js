const assert = require("assert");
const {getFlightStatus, sendWebHooks, getWebhooksSubscribe} = require('../api-rapid');

describe('Tests for api rapid', function() {
    it('Test #1.1. Check status code for GET request flights/number/DL47', async function() {
        const response = await getFlightStatus('false', 'false');
        assert.equal(response.status, 200);
    });

    it('Test #1.2. Check status code for POST request webhook/FlightByNumber/KL1395', async function() {
        const response = await sendWebHooks('https://testvysite.com');
        assert.equal(response.status, 200);
    });

    it('Test #1.3. Check status code for GET request subscriptions/webhook', async function() {
        const response = await getWebhooksSubscribe();
        assert.equal(response.status, 200);
    });
});