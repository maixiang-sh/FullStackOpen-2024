const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("most blogs", () => {
  const listWithBlog = [
    {
      _id: "4c2zv8qlb",
      title: "Exploring JavaScript",
      author: "Alan Turing",
      url: "https://example.com/js",
      likes: 27,
      __v: 3,
    },
    {
      _id: "k4sdj9fkj",
      title: "Understanding Algorithms",
      author: "Grace Hopper",
      url: "https://example.com/algorithms",
      likes: 54,
      __v: 7,
    },
    {
      _id: "d9s8j2lka",
      title: "Advanced Data Structures",
      author: "Ada Lovelace",
      url: "https://example.com/data-structures",
      likes: 13,
      __v: 2,
    },
    {
      _id: "8g7d9fkl3",
      title: "Introduction to Computer Science",
      author: "Grace Hopper",
      url: "https://example.com/computer-science",
      likes: 62,
      __v: 1,
    },
    {
      _id: "js8d2lf9a",
      title: "The Art of Programming",
      author: "Grace Hopper",
      url: "https://example.com/programming",
      likes: 78,
      __v: 5,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.mostBlogs(listWithBlog);
    const expect = {
      author: "Grace Hopper",
      blogs: 3,
    };
    assert.deepStrictEqual(result, expect);
  });
});
