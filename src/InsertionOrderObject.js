export default class InsertionOrderObject {
  #map;

  constructor(entries) {
    this.#map = new Map();
    if (Array.isArray(entries)) {
      for (const [key, value] of entries) {
        this.#map.set(key, value);
      }
    }
  }

  #getInsertionOrderedObject() {
    return Array.from(this.#map);
  }

  print() {
    console.log(this.#map);
  }

  map(fn) {
    return this.#getInsertionOrderedObject().map(fn);
  }

  filter(fn) {
    return this.#getInsertionOrderedObject().filter(fn);
  }

  reduce(fn) {
    return this.#getInsertionOrderedObject().reduce(fn);
  }

  foreach(fn) {
    this.#getInsertionOrderedObject().foreach(fn);
  }

  has(key) {
    return this.#map.has(key);
  }

  set(key, value) {
    return this.map.set(key, value);
  }

  entries() {
    return Array.from(this.#map.entries());
  }
}
