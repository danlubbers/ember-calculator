import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return this.store.findAll('themes');
    },

    setupController(controller, model) {
        Ember.set(controller, 'themes', model);
    }
});
