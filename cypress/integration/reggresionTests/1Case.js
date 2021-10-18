import * as el from "../pages";
describe("Prvi TestCase", function () {
  it("Validate redirection to Sign In page", function () {
    el.homepage.goToLoginPage();
  });
});
