import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('draw-svg', 'Integration | Component | draw svg', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{draw-svg}}`);

  assert.equal(this.$().text().trim(), 'Created with SnapSnap.svgSnap.svg');

  // Template block usage:
  this.render(hbs`{{#draw-svg}}template block text{{/draw-svg}}`);

  assert.equal(this.$().text().trim(), 'Created with SnapSnap.svgSnap.svg\ntemplate block text');
});
