import {Element} from '@polymer/polymer/polymer-element';
import {PropertyAccessors} from '@polymer/polymer/lib/mixins/property-accessors';
import {render} from 'lit-html';

const withLit = Base => {
  return class extends PropertyAccessors(Base) {
    _propertiesChanged() {
      render(this.render(), this);
    }
  };
};

export default class PolyLitElement extends withLit(Element) {}
