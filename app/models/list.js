import Model, {attr} from '@ember-data/model';

export default class ListModel extends Model {
    @attr() title;
}
