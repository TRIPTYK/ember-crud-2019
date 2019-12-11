import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'
export default class TodoListComponent extends Component {
  @service store;
  @service router;
  @action
  async submitItem(item) {
    const list = this.args.list;
    let newTodo = await this.store.createRecord('todo');
    newTodo.description=item;
    list.todos.pushObject(newTodo);
    await newTodo.save();
    await list.save();
  }
  @action
  async removeList(evt)
  {
    evt.preventDefault();
    await this.args.list.casacdeDestroy()
    this.router.transitionTo('index')
    // this.args.list.todos.forEach(todo => {
    //    todo.destroyRecord()
    // });
    // await this.args.list.destroyRecord();
  }
}
