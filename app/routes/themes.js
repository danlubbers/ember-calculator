import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // Error: themes Model is not defined ReferenceError: Model is not defined
        // return this.store.findAll('themes');
    },

    setupController(controller, model) {
        Ember.set(controller, 'themes', model);
    }
});
