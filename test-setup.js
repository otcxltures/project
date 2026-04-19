// Mock localStorage for tests
var localStorageMock = {
  store: {},
  getItem: function(key) {
    return this.store[key] || null;
  },
  setItem: function(key, value) {
    this.store[key] = value.toString();
  },
  removeItem: function(key) {
    delete this.store[key];
  },
  clear: function() {
    this.store = {};
  }
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

// Mock document methods that might not exist in test environment
if (typeof document === 'undefined') {
  global.document = {
    getElementById: function() { return null; },
    querySelector: function() { return null; },
    querySelectorAll: function() { return []; }
  };
}

// Mock fetch for API tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      rates: { USD: 0.0077 }
    })
  })
);