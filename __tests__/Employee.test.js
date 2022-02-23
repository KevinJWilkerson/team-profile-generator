const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Kevin", "1", "kevin.j.wilkerson@gmail.com");

  expect(employee.name).toBe("Kevin");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("kevin.j.wilkerson@gmail.com");
});
