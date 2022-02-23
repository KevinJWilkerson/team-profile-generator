const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Kevin",
    "1",
    "kevin.j.wilkerson@gmail.com",
    "KevinJWilkerson",
    "Engineer"
  );

  expect(engineer.name).toBe("Kevin");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("kevin.j.wilkerson@gmail.com");
  expect(engineer.github).toBe("KevinJWilkerson");
  expect(engineer.role).toBe("Engineer");
});
