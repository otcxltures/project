module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./test-setup.js'],
  // Allow tests to access functions from script.js
  globals: {
    budget: 0,
    expenses: []
  }
};