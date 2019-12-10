import Component from '@glimmer/component';
import { inject as service } from "@ember/service";

export default class UiSidebarComponent extends Component {
  @service store;
  lists = []
  constructor() {
    super(...arguments);
    this.lists = this.store.findAll('list');
  }
}
