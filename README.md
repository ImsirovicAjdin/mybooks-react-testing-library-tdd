## Commit e8963b8 (Ch 3 end):

You had to add `expect.extend({ toContainText })` in both Step 17 and Step 19 for the following reasons:

1. **Step 17**: In Step 17, you added the `expect.extend({ toContainText })` line to your main test file (`domMatchers.js`) where you set up Jest's custom matchers. This line extends Jest's `expect` object with your custom `toContainText` matcher, making it available for all test files. This setup is done globally for your entire test suite.

2. **Step 19**: In Step 19, when you updated the `AppointmentsDayView.test.js` file to use the custom matcher, you needed to import and extend it in the local context of that specific test file. This ensures that the custom matcher is available for tests within that file. Each test file can have its own custom matchers, and these custom matchers are scoped to that file.

So, you added `expect.extend({ toContainText })` to both locations to ensure that the custom matcher is globally available across your test suite and specifically available in the `AppointmentsDayView.test.js` file where you're using it.

## Chapter 3 re-coding notes (commit: XXXXXX)

The section you provided discusses creating a custom Jest matcher called `toContainText`. This matcher aims to make expectations involving the presence of specific text within an element's content more readable. While creating custom matchers can be useful for enhancing test readability, it's essential to consider simplicity and maintainability.

Here are some suggestions to simplify the implementation of the `toContainText` matcher:

1. **Evaluate Necessity**: Before creating a custom matcher, evaluate whether it's truly necessary. If existing Jest matchers can already handle your expectations effectively, there may be no need for a custom matcher.

2. **Use Existing Matchers**: Jest provides various built-in matchers like `toContain` and `toHaveTextContent`, which can often handle text-related expectations. Utilize these matchers whenever possible.

3. **Custom Helper Functions**: Instead of creating a custom matcher, consider writing custom helper functions specific to your project. These functions can encapsulate common expectations and be reused across tests without the complexity of a custom matcher.

4. **Maintain Test Simplicity**: As mentioned in the book, aim for one expectation per test whenever possible. This helps keep tests simple and focused on specific behaviors.

5. **Readability Over Complexity**: While custom matchers can make tests more readable, they should not introduce unnecessary complexity. Evaluate whether the improved readability justifies the complexity of a custom matcher.

6. **Keep an Eye on Testing Libraries**: Explore existing testing libraries and matchers available as npm packages. They may provide the functionality you need without the need to build custom matchers from scratch.

Based on these suggestions, if your existing tests are not overly complex and the use of custom matchers doesn't significantly improve readability, you might consider sticking to Jest's built-in matchers and helper functions. However, if you find specific repetitive expectations that could benefit from a custom matcher and it enhances the clarity of your tests, then creating one may be worthwhile.

Please let me know if you'd like to proceed with the creation of the `toContainText` matcher or if you have any other questions or requests.

