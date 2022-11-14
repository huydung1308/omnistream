import { totalWidthCalculator, maxHeightCalculator } from "../tools";

describe("Tools test suites", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("totalWidthCalculator", () => {
    it("Should return total width", async () => {
      // Arrange

      const products = [
        {
          width: "10",
        },
        {
          width: "14",
        },
      ];

      // Action
      const result = totalWidthCalculator(products);

      // Assert
      expect(result).toBe(24);
    });

    it("Should return NaN when passing string not convertable to number", async () => {
      // Arrange

      const products = [
        {
          width: "0",
        },
        {
          width: "x",
        },
      ];

      // Action
      const result = totalWidthCalculator(products);

      // Assert
      expect(result).toBe(NaN);
    });
  });

  describe("maxHeightCalculator", () => {
    it("Should return max height", async () => {
      // Arrange

      const products = [
        {
          height: "33",
        },
        {
          height: "11",
        },
      ];

      // Action
      const result = maxHeightCalculator(products);

      // Assert
      expect(result).toBe(33);
    });

    it("Should return NaN when passing string not convertable to number", async () => {
      // Arrange

      const products = [
        {
          height: "22",
        },
        {
          height: "x",
        },
      ];

      // Action
      const result = maxHeightCalculator(products);

      // Assert
      expect(result).toBe(NaN);
    });
  });
});
