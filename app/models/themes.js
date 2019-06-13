import DS from 'ember-data';

export default Model.extend({
    type: DS.attr('string'),
    id: DS.attr('string'),
    attributes: DS.attr('string')
});
console.log(type)

