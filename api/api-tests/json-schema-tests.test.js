const assert = require("assert");
const getFlightStatusSchema = require('../json-schema-rapid/get-flights-status.v1.json')
const {getFlightStatus, sendWebHooks, getWebhooksSubscribe} = require('../api-rapid');
const Validator = require('jsonschema').Validator;
const validator = new Validator();

describe('Tests for validate json schema', function() {
    it('Test #1.1. Check json schema for GET request flights/number/DL47', async function() {
        const response = await getFlightStatus('false', 'false');
        const schemaValidate = validator.validate(...response.data, getFlightStatusSchema)
        assert.equal(schemaValidate.valid, true);
    });

    it('Test #1.2. Check json schema for POST request webhook/FlightByNumber/KL1395', async function() {
        const response = await sendWebHooks('https://testsitetest.ru');
        const schemaValidate = validator.validate(...response.data, getFlightStatusSchema)
        assert.equal(schemaValidate.valid, true);
    });

    it('Test #1.3. Check json schema for GET request subscriptions/webhook', async function() {
        const response = await getWebhooksSubscribe();
        const schemaValidate = validator.validate(...response.data, getFlightStatusSchema)
        assert.equal(schemaValidate.valid, true);
    });
});