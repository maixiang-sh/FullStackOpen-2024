const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("favorite blog", () => {
  const listWithBlog = [
    {
      _id: "5gq7dx1ki",
      title: "Understanding Algorithms",
      author: "Jane Smith",
      url: "https://example.com/algorithms",
      likes: 42,
      __v: 7,
    },
    {
      _id: "4c2zv8qlb",
      title: "Exploring JavaScript",
      author: "Alan Turing",
      url: "https://example.com/js",
      likes: 27,
      __v: 3,
    },
    {
      _id: "7hs1p5fma",
      title: "Advanced Data Structures",
      author: "John Doe",
      url: "https://example.com/data-structures",
      likes: 83,
      __v: 1,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.favoriteBlog(listWithBlog);
    const expect = {
      title: "Advanced Data Structures",
      author: "John Doe",
      likes: 83,
    };
    assert.deepStrictEqual(result, expect);
  });
});
