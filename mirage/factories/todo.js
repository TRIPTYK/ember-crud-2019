import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
export default Factory.extend({
  body(){
    return faker.lorem.sentence();
  }
});
