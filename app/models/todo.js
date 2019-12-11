import Model,{attr, belongsTo} from '@ember-data/model';

export default class TodoModel extends Model {
  @attr()description;
  @attr()done;
  @belongsTo() list;
}
