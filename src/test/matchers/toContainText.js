export const toContainText = (
  received,
  expectedText
) => ({
  pass: received.textContent.includes(expectedText),
  message: () =>
    `expect(element).toContainText("${expectedText}")`
});
