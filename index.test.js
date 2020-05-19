const generate = require("./index");

describe("random-graph-generator", () => {
  describe("invalid args", () => {
    it("should throw [maxWidth] error", () => {
      expect(() => {
        generate([], {
          maxWidth: undefined,
          edgeProbability: 0.1,
        });
      }).toThrow(Error);
    });

    it("should throw [edgeProbability] error", () => {
      expect(() => {
        generate([], {
          maxWidth: 2,
          edgeProbability: undefined,
        });
      }).toThrow(Error);
    });

    it("should return empty graph", () => {
      expect(
        generate(null, {
          maxWidth: 2,
          edgeProbability: 0.1,
        }).nodes().length
      ).toBe(0);
    });
  });
});
