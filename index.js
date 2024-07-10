let employee = {
    name: 'Sam'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with all existing key-value pairs and add/update the new key-value pair
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modify the existing employee object with the new key-value pair
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by omitting the specified key from the employee object
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Modify the existing employee object by deleting the specified key
    delete employee[key];
    return employee;
  }

  