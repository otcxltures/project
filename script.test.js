// Tests for PesaPal

// Test 1: formatMoney adds KSH
test('formatMoney adds KSH to number', function() {
  var result = formatMoney(500);
  expect(result).toBe('KSH 500');
});

// Test 2: formatMoney works with big numbers
test('formatMoney works with thousands', function() {
  var result = formatMoney(5000);
  expect(result).toBe('KSH 5,000');
});

// Test 3: saveData stores budget in localStorage
test('saveData stores budget', function() {
  budget = 1000;
  saveData();
  expect(localStorage.getItem('pesapal_budget')).toBe('1000');
});

// Test 4: loadData gets budget from localStorage
test('loadData reads budget from localStorage', function() {
  localStorage.setItem('pesapal_budget', '2000');
  loadData();
  expect(budget).toBe(2000);
});

// Test 5: expenses array starts empty
test('expenses starts empty', function() {
  expect(expenses.length).toBe(0);
});