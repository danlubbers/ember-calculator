import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://s3.amazonaws.com',
    namespace: 'gavant-public/',

    pathForType() {
        return 'themes';
    }
});


// https://s3.amazonaws.com/gavant-public/themes