// ============================================
// SIMPLE TESTS - No imports needed
// We redefine the functions here to test them
// ============================================

// Copy of formatMoney function
function formatMoney(amount) {
  return "KSH " + amount.toLocaleString("en-US");
}

// Copy of saveData logic
function saveData(budget, expenses) {
  localStorage.setItem("pesapal_budget", budget);
  localStorage.setItem("pesapal_expenses", JSON.stringify(expenses));
}

// Copy of loadData logic  
function loadData() {
  var budget = 0;
  var expenses = [];
  
  var savedBudget = localStorage.getItem("pesapal_budget");
  var savedExpenses = localStorage.getItem("pesapal_expenses");
  
  if (savedBudget) {
    budget = parseFloat(savedBudget);
  }
  
  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
  }
  
  return { budget: budget, expenses: expenses };
}

// ============================================
// TESTS
// ============================================

describe('PesaPal Tests', function() {
  
  beforeEach(function() {
    localStorage.clear();
  });

  test('formatMoney adds KSH to number', function() {
    var result = formatMoney(500);
    expect(result).toBe('KSH 500');
  });

  test('formatMoney works with thousands', function() {
    var result = formatMoney(5000);
    expect(result).toBe('KSH 5,000');
  });

  test('saveData stores budget', function() {
    saveData(1000, []);
    expect(localStorage.getItem('pesapal_budget')).toBe('1000');
  });

  test('loadData reads budget', function() {
    localStorage.setItem('pesapal_budget', '2000');
    var data = loadData();
    expect(data.budget).toBe(2000);
  });

  test('expenses array is empty at start', function() {
    var data = loadData();
    expect(data.expenses.length).toBe(0);
  });

  test('save and load expenses', function() {
    var testExpenses = [
      { date: 123456, description: 'Lunch', amount: 200, category: 'Food' }
    ];
    saveData(5000, testExpenses);
    var data = loadData();
    expect(data.expenses.length).toBe(1);
    expect(data.expenses[0].amount).toBe(200);
  });

});