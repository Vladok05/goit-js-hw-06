`use strict`;
class Storage {
  #items;
  constructor(item) {
    this.#items = item;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexItems = this.#items.indexOf(itemToRemove);
    if (indexItems !== -1) this.#items.splice(indexItems, 1);
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log('task-2');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
