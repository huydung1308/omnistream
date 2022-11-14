import { processFile } from "@Utils/tools";

import { getProduct } from "../product";

jest.mock("@Utils/tools", () => ({
  processFile: jest.fn(),
}));

describe("Product test suites", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getProduct", () => {
    it("Should call processFile once", async () => {
      // Arrange
      const store_id = "some-store-id";

      (processFile as any).mockImplementation(() => []);

      // Action
      await getProduct(store_id);

      // Assert
      expect(processFile).toBeCalledTimes(1);
      expect(processFile).toBeCalledWith(expect.any(String));
    });

    it("Should return an array not empty when store-id exist in data", async () => {
      // Arrange
      const store_id = "some-store-id";

      const mockedResult = [
        {
          id: "1",
          name: "tomato-sauce-barilla-reg",
          store_id: "some-store-id",
          height: "30",
          width: "10",
        },
        {
          id: "2",
          name: "tomato-sauce-barilla-spicy",
          store_id: "store-mainst-2",
          height: "35",
          width: "11",
        },
      ];

      const expectedResult = [
        {
          id: "1",
          name: "tomato-sauce-barilla-reg",
          store_id: "some-store-id",
          height: "30",
          width: "10",
        },
      ];

      (processFile as any).mockImplementation(() => mockedResult);

      // Action
      const result = await getProduct(store_id);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual(expectedResult);
    });

    it("Should return an array empty when store-id not exist in data", async () => {
      // Arrange
      const store_id = "some-store-id-not-exist";

      const mockedResult: any = [
        {
          id: "1",
          name: "tomato-sauce-barilla-reg",
          store_id: "some-store-id",
          height: "30",
          width: "10",
        },
        {
          id: "2",
          name: "tomato-sauce-barilla-spicy",
          store_id: "store-mainst-2",
          height: "35",
          width: "11",
        },
      ];

      const expectedResult = [] as any;

      (processFile as any).mockImplementation(() => mockedResult);

      // Action
      const result = await getProduct(store_id);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual(expectedResult);
    });

    it("Should return an array empty when processFile throw error", async () => {
      // Arrange
      const store_id = "some-store-id-not-exist";

      const expectedResult = [] as any;

      (processFile as any).mockImplementation(() => {
        throw Error("some error");
      });

      // Action
      const result = await getProduct(store_id);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual(expectedResult);
    });
  });
});
