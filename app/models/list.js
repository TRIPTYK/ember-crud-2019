import Model, {attr,hasMany} from '@ember-data/model';

export default class ListModel extends Model {
    @attr() title;
    @hasMany() todos;
}
