import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'
export default class TodoListComponent extends Component {
  @service store;
  @action
  async submitItem(item) {
    const list = this.args.list;
    let newTodo = await this.store.createRecord('todo');
    newTodo.body=item;
    list.todos.pushObject(newTodo);
    await newTodo.save();
    await list.save();
  }
}
