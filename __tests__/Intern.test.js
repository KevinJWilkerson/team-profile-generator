const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern(
    "Kevin",
    "1",
    "kevin.j.wilkerson@gmail.com",
    "UT at Austin",
    "Intern"
  );

  expect(intern.name).toBe("Kevin");
  expect(intern.id).toBe("1");
  expect(intern.email).toBe("kevin.j.wilkerson@gmail.com");
  expect(intern.school).toBe("UT at Austin");
  expect(intern.role).toBe("Intern");
});
