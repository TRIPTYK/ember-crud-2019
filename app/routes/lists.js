import Route from '@ember/routing/route';

export default class ListsRoute extends Route {
 async model({listId}){
    return await this.store.findRecord('list',listId);
  }
}
