export class ObservableMap extends Map {
  constructor() {
    super();
    this._observers = {};
  }

  set(key, value) {
    super.set(key, value);
    this._publish(key);
  }

  delete(key) {
    super.delete(key);
    this._publish(key);
  }

  clear() {
    super.delete(key);
    for (const key of this._observers) {
      this._publish(key);
    }
  }

  _publish(key) {
    if (this._observers[key]) {
      const value = this.get(key);
      this._observers[key].forEach(cb => cb(value));
    }
  }

  observe(key, cb) {
    this._observe(key, cb);

    return () => {
      this._unobserve(key, cb);
    };
  }

  _observe(key, cb) {
    if (!this._observers[key]) {
      this._observers[key] = [];
    }
    this._observers[key].push(cb);
  }

  _unobserve(key, cb) {
    if (this._observers[key]) {
      const filtered = this._observers[key].filter(otherCb => otherCb !== cb);
      if (filtered.length) {
        this._observers[key] = filtered;
      } else {
        delete this._observers[key];
      }
    }
  }
}
