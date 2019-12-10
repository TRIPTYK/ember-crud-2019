import Model,{attr, belongsTo} from '@ember-data/model';

export default class TodoModel extends Model {
  @attr()body;
  @belongsTo() list;
}
