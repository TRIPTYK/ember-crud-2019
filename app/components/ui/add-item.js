import Component from '@glimmer/component';
import {action} from '@ember/object';
import{tracked} from '@glimmer/tracking'
export default class UiAddItemComponent extends Component {
 
  @tracked itemName =null;

  async saveList(){
    this.args.submit(this.itemName)
    this.itemName=""
  }

  @action
  onSubmit(evt)
  {
    evt.preventDefault();
    this.saveList();
  }
}
