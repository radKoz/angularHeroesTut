import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 0,  name: 'Zero' },
    { id: 11, name: 'Mr. Nice'},
    { id: 12, name: 'Narco'},
    { id: 13, name: 'Bombasto'},
    { id: 14, name: 'Czarek'},
    { id: 15, name: 'Marek'},
    { id: 16, name: 'Jurek'},
    { id: 17, name: 'Darek'},
    { id: 18, name: 'Barek'},
    { id: 19, name: 'Arek'},
    { id: 20, name: 'Bandarek'}
    ];
    return {heroes};
  }
}