import Component from '@glimmer/component';
import {action} from '@ember/object'

 
export default class TodoItemComponent extends Component {
  
  @action
  async doneClick(evt){
    evt.preventDefault();
    this.args.todo.done = !this.args.todo.done;
    await this.args.todo.save();
  }

  @action
  async removeClick(evt)
  {
    evt.preventDefault();
    // await this.args.todo.deleteRecord()
    // await this.args.todo.save();
    await this.args.todo.destroyRecord();
  


  }
}
