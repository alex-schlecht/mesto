class Section {
  constructor({items, renderer}, containerSelector) {
  this._renderItems = items;
  this._renderer = renderer;
  this._containerSelector = containerSelector;
  }
  renderElement() {
    this._renderItems.forEach(item => this._renderer(item));
  }
  addItem(element) {
    this._containerSelector.prepend(element);
  }
}

export default Section