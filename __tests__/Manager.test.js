const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager(
    "Kevin",
    "1",
    "kevin.j.wilkerson@gmail.com",
    "1",
    "Manager"
  );

  expect(manager.name).toBe("Kevin");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("kevin.j.wilkerson@gmail.com");
  expect(manager.officeNumber).toBe("1");
  expect(manager.role).toBe("Manager");
});
