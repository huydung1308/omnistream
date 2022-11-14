import { processFile } from "@Utils/tools";

import { getShelves } from "../shelves";

jest.mock("@Utils/tools", () => ({
  processFile: jest.fn(),
}));

describe("Shelves test suites", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getShelves", () => {
    it("Should call processFile once", async () => {
      // Arrange
      const store_id = "some-store-id";

      (processFile as any).mockImplementation(() => []);

      // Action
      await getShelves(store_id);

      // Assert
      expect(processFile).toBeCalledTimes(1);
      expect(processFile).toBeCalledWith(expect.any(String));
    });

    it("Should return an array not empty when store-id exist in data", async () => {
      // Arrange
      const store_id = "some-store-id";

      const mockedResult = [
        { id: "4", store_id: "some-store-id", height: "50", width: "300" },
        {
          id: "5",
          store_id: "some-other-store-id",
          height: "70",
          width: "300",
        },
      ];

      const expectedResult = [
        { id: "4", store_id: "some-store-id", height: "50", width: "300" },
      ];

      (processFile as any).mockImplementation(() => mockedResult);

      // Action
      const result = await getShelves(store_id);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual(expectedResult);
    });

    it("Should return an array empty when store-id not exist in data", async () => {
      // Arrange
      const store_id = "some-store-id-not-exist";

      const mockedResult: any = [
        { id: "4", store_id: "some-store-id", height: "50", width: "300" },
        {
          id: "5",
          store_id: "some-other-store-id",
          height: "70",
          width: "300",
        },
      ];

      const expectedResult = [] as any;

      (processFile as any).mockImplementation(() => mockedResult);

      // Action
      const result = await getShelves(store_id);

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
      const result = await getShelves(store_id);

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual(expectedResult);
    });
  });
});
