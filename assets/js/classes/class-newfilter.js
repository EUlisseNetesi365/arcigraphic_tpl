export class newFilter {
  constructor(container, items) {
    this.container = container;
    this.items = items;
    this.filter = [];
    this.itemsFiltered = [];
    this.lockFiltered = [];
  }

  filterByPrices(selector, min, max) {
    if (!this.filter.includes(selector)) {
      this.filter.push(selector);
      this.filter[selector] = [];
    }

    this.filter[selector].push(min);
    this.filter[selector].push(max);

    this.handleSticker("stickerByPrices", "attack");

    if (this.filter.length > 1) {
      this.itemsFiltered = this._filterElements(this.itemsFiltered, (item) => {
        this.lockFiltered.push(item);

        let price = parseFloat(
          item.querySelector(selector).innerHTML.substring(1)
        );

        return price < min || price > max;
      });
    } else {
      this.itemsFiltered = this._filterElements(this.items, (item) => {
        let price = parseFloat(
          item.querySelector(selector).innerHTML.substring(1)
        );
        return price < min || price > max;
      });
    }

    this._printItemsFiltered(this.itemsFiltered);
  }

  filterByColors(selector, button) {
    if (button.checked) {
      if (!this.filter.includes(selector)) {
        this.filter.push(selector);
        this.filter[selector] = [];
      }

      this.handleSticker("stickerByColors", "attack");

      if (this.filter.length > 1) {
        this.itemsFiltered = this._filterElements(
          this.itemsFiltered,
          (item) => {
            let colors = [];
            this.lockFiltered.push(item);

            item.querySelectorAll(selector).forEach((color) => {
              colors.push(color.value);
            });
            return this._loopValue(this.filter[selector], colors);
          }
        );
      } else {
        this.itemsFiltered = this._filterElements(this.items, (item) => {
          let colors = [];
          item.querySelectorAll(selector).forEach((color) => {
            colors.push(color.value);
          });

          return this._loopValue(this.filter[selector], colors);
        });
      }
    } else if (!button.checked) {
      if (this.filter[selector].includes(button.value)) {
        this.filter[selector].splice(
          this.filter[selector].indexOf(button.value),
          1
        );
      }
      if (this.filter[selector].length === 0) {
        this.handleSticker("stickerByColors", "remove");
        this.filter.splice(this.filter.indexOf(selector), 1);

        if (this.filter.length >= 1) {
          this.itemsFiltered = [];
          this.lockFiltered.forEach((item) => {
            this.itemsFiltered.push(item);
          });
        }

        if (this.filter.length === 0) {
          this.itemsFiltered = [];
          this.items.forEach((item) => {
            this.itemsFiltered.push(item);
          });
        }
      } else {
        if (this.filter.length > 1) {
          this.itemsFiltered = this._filterElements(
            this.itemsFiltered,
            (item) => {
              let colors = [];
              this.lockFiltered.push(item);

              item.querySelectorAll(selector).forEach((color) => {
                colors.push(color.value);
              });
              return this._loopValue(this.filter[selector], colors);
            }
          );
        } else {
          this.itemsFiltered = this._filterElements(this.items, (item) => {
            let colors = [];
            item.querySelectorAll(selector).forEach((color) => {
              colors.push(color.value);
            });

            return this._loopValue(this.filter[selector], colors);
          });
        }
      }
    }
    this._printItemsFiltered(this.itemsFiltered);
  }

  filterByBrands(selector, button) {
    if (button.checked) {
      if (!this.filter.includes(selector)) {
        this.filter.push(selector);
        this.filter[selector] = [];
      }

      this.handleSticker("stickerByBrands", "attack");

      this.filter[selector].push(button.value);

      this.itemsFiltered = this._filterElements(this.items, (item) => {
        return this._loopValue(
          this.filter[selector],
          item.querySelector(selector).innerHTML.trim()
        );
      });

      this._printItemsFiltered(this.itemsFiltered);
    } else if (!button.checked) {
      if (this.filter[selector].includes(button.value)) {
        this.filter[selector].splice(
          this.filter[selector].indexOf(button.value),
          1
        );
      }

      if (this.filter[selector].length === 0) {
        this.handleSticker("stickerByBrands", "remove");
        this.filter.splice(this.filter.indexOf(selector), 1);

        if (this.filter.length === 0) {
          this.itemsFiltered = [];
          this.items.forEach((item) => {
            this.itemsFiltered.push(item);
          });
        }
      } else {
        this.itemsFiltered = this._filterElements(this.items, (item) => {
          return this._loopValue(
            this.filter[selector],
            item.querySelector(selector).innerHTML.trim()
          );
        });
      }

      this._printItemsFiltered(this.itemsFiltered);
    }
  }

  handleSticker(sticker, action) {
    if (action === "attack") {
      document.getElementById(sticker).classList.remove("d-none");
    }

    if (action === "remove") {
      document.getElementById(sticker).classList.add("d-none");
    }
  }

  _loopValue(array, filter) {
    if (Array.isArray(filter)) {
      let skip = [];
      return array.some((value) => filter.includes(value));
    } else {
      let skip = [];
      if (array.includes(filter)) skip.push(true);
      else skip.push(false);

      return skip.includes(true) ?? false;
    }
  }

  _filterElements(elements, callback) {
    return Array.prototype.filter.call(elements, callback);
  }

  _printItemsFiltered(itemsFiltered, filter) {
    this.container.innerHTML = "";
    itemsFiltered.forEach((item) => {
      this.container.appendChild(item);
    });
  }
}
