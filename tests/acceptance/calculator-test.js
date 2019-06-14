import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | calculator', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /calculator', async function(assert) {
    await visit('/calculator');

    assert.equal(currentURL(), '/calculator');
  });
});
