import Component from '@glimmer/component';
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';
export default class UiSidebarComponent extends Component {
  @service store;
  @tracked isLoading = true;
  @tracked lists = []

  @action
  async loadData(){
    this.lists = await this.store.findAll('list',{include:'todos'});
    this.isLoading = false; 
  }
}
