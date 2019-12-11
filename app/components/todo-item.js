import Component from '@glimmer/component';
import {action} from '@ember/object'
import {tracked} from '@glimmer/tracking';
 
export default class TodoItemComponent extends Component {

  @action
  doneClick(evt){
    evt.preventDefault();
    this.args.todo.done = !this.args.todo.done;
  }
}
