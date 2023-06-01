module.exports = class ExtObj {
  constructor(obj) {
    if (typeof obj !== "object") {
      throw new Error(`${obj} passed to ExtObj is not a valid object!`);
    }

    this._categories = obj.category;
    this._origin = obj.origin;
    this._resourceURL = obj.resourceURL;
    this._description = obj.description;
    this._obj = obj;

    this._categoryList = this._categories.split(":");

    this.category = this._categoryList[0];
  }

  contains(value) {
    if (this._categoryList.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  getCategories() {
    return this._categoryList;
  }

  getFull() {
    let tmpObj = {};

    if (this._categoryList.length > 1) {
      tmpObj.category = this._categoryList;
    } else {
      tmpObj.category = this.category;
    }

    if (typeof this._origin === "string") { tmpObj.origin = this._origin; }
    if (typeof this._resourceURL === "string") { tmpObj.resourceURL = this._resourceURL; }
    if (typeof this._description === "string") { tmpObj.description = this._description; }

    return tmpObj;
  }

  toString() {
    return this.category;
  }

};
