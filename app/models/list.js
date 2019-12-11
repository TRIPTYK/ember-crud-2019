import Model, { attr, hasMany } from '@ember-data/model';

export default class ListModel extends Model {
    @attr() titre;
    @hasMany() todos;

    async casacdeDestroy() {
        this.todos.forEach(todo => {
            todo.destroyRecord()
        });
        await this.destroyRecord();
    }
}
