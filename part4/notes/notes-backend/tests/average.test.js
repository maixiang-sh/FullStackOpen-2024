const { test, describe } = require("node:test");
const assert = require("node:assert");

const average = require("../utils/for_testing").average;

// 定义描述块
// 描述块可用于将测试分组为逻辑集合。测试输出还使用描述块的名称：
describe("average", () => {
  test("of one value is the value itself", () => {
    assert.strictEqual(average([1]), 1);
  });

  test("of many is calculated right", () => {
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5);
  });

  test("of empty array is zero", () => {
    assert.strictEqual(average([]), 0);
  });
});
