import { toContainText } from "./toContainText";

const stripTerminalColor = (text) =>
    text.replace(/\x1B\[\d+m/g, "");

describe("toContainText matcher", () => {
  it("returns pass is true when text is found in the given DOM element", () => {
    const domElement = {
      textContent: "text to find"
    };

    const result = toContainText(
      domElement,
      "text to find"
    );

    expect(result.pass).toBe(true);
  });

  // Add a new test to verify that the matcher fails when text is not found
  it("returns pass is false when the text is not found in the given DOM element", () => {
    const domElement = { textContent: "" };

    const result = toContainText(
      domElement,
      "text to find"
    );

    expect(result.pass).toBe(false);
  });

  it("returns a message that contains the source line if negated match", () => {

    const domElement = { textContent: "text to find" };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(
      stripTerminalColor(result.message())
    ).toContain(
      `expect(element).not.toContainText("text to find")`
    );
  });

});
