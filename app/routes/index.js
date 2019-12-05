import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model(){
        return await this.store.findAll('list')
    }
}
