/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var googleapis = require('../lib/googleapis.js'),
    MockTransporter = require('./mocks/transporters.js');

describe('Clients', function() {

  var mockTransporter =
        new MockTransporter(__dirname + '/data/discovery_plus.json');

  it('should create request helpers according ' +
        'to the resource on discovery API response', function() {
    googleapis.Transporter = mockTransporter;
    googleapis
        .discover('plus', 'v3')
        .execute(function(err, client) {
      assert.equal(typeof client.plus.people.get, 'function');
      assert.equal(typeof client.plus.activities.search, 'function');
      assert.equal(typeof client.plus.comments.list, 'function');
    });
  });

  it('should be able to generate default discovery url', function() {
    var api = { name: 'plus', version: 'v3', opts: {} };
    var discoveryUrl =
        googleapis.generateDiscoveryUrl(api);
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'https:');
    assert.equal(parsed.host, 'www.googleapis.com');
    assert.equal(parsed.path, '/discovery/v1/apis/plus/v3/rpc');
    assert.equal(parsed.query, null);
  });

  it('should be able to generate default discovery url with custom ' +
      'base url and parameters configuration', function() {
    var api = { name: 'plus', version: 'v3', opts: {
      baseDiscoveryUrl: 'http://mydeployment/discovery/',
      discoveryParams: { a: 'hello', b: 'hi' }
    }};
    var discoveryUrl = googleapis.generateDiscoveryUrl(api);
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'http:');
    assert.equal(parsed.host, 'mydeployment');
    assert.equal(parsed.pathname, '/discovery/plus/v3/rpc');
    assert.equal(parsed.query, 'a=hello&b=hi');
  });

});
