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

## Commit e8963b8 (Ch 3 end):

You had to add `expect.extend({ toContainText })` in both Step 17 and Step 19 for the following reasons:

1. **Step 17**: In Step 17, you added the `expect.extend({ toContainText })` line to your main test file (`domMatchers.js`) where you set up Jest's custom matchers. This line extends Jest's `expect` object with your custom `toContainText` matcher, making it available for all test files. This setup is done globally for your entire test suite.

2. **Step 19**: In Step 19, when you updated the `AppointmentsDayView.test.js` file to use the custom matcher, you needed to import and extend it in the local context of that specific test file. This ensures that the custom matcher is available for tests within that file. Each test file can have its own custom matchers, and these custom matchers are scoped to that file.

So, you added `expect.extend({ toContainText })` to both locations to ensure that the custom matcher is globally available across your test suite and specifically available in the `AppointmentsDayView.test.js` file where you're using it.

## ### WHY DO WE TEST-DRIVE MATCHERS?

**You should write tests for any code that isn’t just simply calling other functions or setting variables.**

At the start of this chapter, you extracted functions such as **render** and **click**. These functions didn’t need tests because you were just transplanting the same line of code from one file to another. But this matcher does something much more complex – it must return an object that conforms to the pattern that Jest requires. It also makes use of Jest’s utility functions to build up a helpful message. That complexity warrants tests.

**If you are building matchers for a library, you should be more careful with your matcher’s implementation. For example, we didn’t bother to check that the received value is an HTML element. That’s fine because this matcher exists in our code base only, and we control how it’s used.** When you package matchers for use in other projects, you should also verify that the function inputs are values you’re expecting to see.

You’ve now successfully test-driven your first matcher. There will be more opportunities for you to practice this skill as this book progresses. For now, we’ll move on to the final part of our cleanup: creating some fluent DOM helpers.


The book discusses the importance of test-driving matchers and mentions that when building matchers for a library, it's essential to be careful with the matcher's implementation. In this case, you didn't check whether the received value is an HTML element because the matcher exists only in your codebase, and you control its usage.

Now that you've successfully test-driven your first matcher, the book suggests moving on to the final part of the cleanup: creating some fluent DOM helpers.

## Extracting fluent DOM helpers

In this section, we’ll pull out a bunch of little functions that will help our tests become more readable. This will be straightforward compared to the matcher we’ve just built.

The **reactTestExtensions.js** module already contains three functions that you’ve used: **initializeReactContainer**, **render**, and **click**.

Now, we’ll add four more: **element**, **elements**, **typesOf**, and **textOf**. These functions are designed to help your tests read much more like plain English. Let’s take a look at an example. Here are the expectations for one of our tests:
```js
const listChildren = document.querySelectorAll("li");
expect(listChildren[0].textContent).toEqual("12:00");
expect(listChildren[1].textContent).toEqual("13:00");
```

We can introduce a function, **elements**, that is a shorter version of **document.querySelectorAll**. The shorter name means we can get rid of the extra variable:
```js
expect(elements("li")[0].textContent).toEqual("12:00");
expect(elements("li")[1].textContent).toEqual("13:00");
```

This code is now calling **querySelectorAll** twice – so it’s doing more work than before – but it’s also shorter and more readable. And we can go even further. We can boil this down to one **expect** call by matching on the **elements** array itself. Since we need **textContent**, we will simply build a mapping function called **textOf** that takes that input array and returns the **textContent** property of each element within it:
```js
expect(textOf(elements("li"))).toEqual(["12:00", "13:00"]);
```

The **toEqual** matcher, when applied to arrays, will check that each array has the same number of elements and that each element appears in the same place.

We’ve reduced our original three lines of code to just one!

Let’s go ahead and build these new helpers:

**Step 1.** Open **test/reactTestExtensions.js** and add the following definitions at the bottom of the file. You’ll notice that the elements are using **Array.from**. This is so that the resulting array can be mapped over by both **typesOf** and **textOf**:
```js
export const element = (selector) => document.querySelector(selector);

export const elements = (selector) => Array.from(document.querySelectorAll(selector));

export const typesOf = (elements) => elements.map((element) => element.type);

export const textOf = (elements) => elements.map((element) => element.textContent);
```

Q: How relevant is this file (`test/reactTestExtensions.js`) to my CRA and RTL React app?

The `reactTestExtensions.js` file you provided is relevant to your CRA (Create React App) and RTL (React Testing Library) React app when you are performing unit testing with React components. It contains utility functions that are commonly used for testing React components in a browser-like environment.

Here's the relevance of this file to your app:

1. **initializeReactContainer**: This function is used to set up a container in the DOM for rendering React components during tests. It ensures that you have a clean container to work with for each test.

2. **render**: The `render` function is used to render a React component into the container. It utilizes React's `createRoot` and `render` methods, ensuring that the component is properly rendered within your testing environment.

3. **click**: The `click` function simulates a click event on a DOM element. This is useful for testing user interactions, such as clicking on buttons or links in your React components.

4. **element** and **elements**: These functions provide a way to select DOM elements by CSS selector, similar to how you would use `querySelector` and `querySelectorAll`. They help you find specific elements within your rendered React component for testing.

5. **typesOf** and **textOf**: These functions allow you to extract information from elements. `typesOf` extracts the `type` property of elements (useful for checking element types like "button" or "input"), while `textOf` extracts the `textContent` property (useful for checking text content within elements).

Overall, this file provides utility functions that simplify the process of testing your React components in a controlled environment, making it easier to write and maintain tests for your app. It's a valuable addition to your testing setup when using CRA and RTL for React development.

