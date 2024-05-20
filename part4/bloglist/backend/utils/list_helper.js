// 接收一个 blogs 数组作为参数，并始终返回值为 1
const dummy = (blogs) => {
  return 1;
};

// 接收博客文章列表作为参数。该函数返回所有博客文章中的点赞总数。
const totalLikes = (blogs) => {
  const totalLikes = (sum, curr) => sum + curr.likes;
  return blogs.reduce(totalLikes, 0);
};

// 接收博客文章列表作为参数。返回最受欢迎的博客（如果有多个，返回第一个）
const favoriteBlog = (blogs) => {
  let mostFavoriteBlog = blogs[0]; // 初始化最受欢迎的博客为列表中的第一篇

  for (let i = 1; i < blogs.length; i++) {
    if (blogs[i].likes > mostFavoriteBlog.likes) {
      mostFavoriteBlog = blogs[i]; // 更新最受欢迎的博客
    }
  }
  const { title, author, likes } = mostFavoriteBlog;
  return { title, author, likes }; // 返回最受欢迎的博客
};

// 该函数接收博客数组作为参数。该函数返回博客数量最多的作者及数量。
const mostBlogs = (blogs) => {
  let authorDict = {};
  let mostBlogs = { author: null, blogs: 0 };

  for (let i = 1; i < blogs.length; i++) {
    const author = blogs[i].author;
    if (!(author in authorDict)) {
      authorDict[author] = 1;
    } else {
      authorDict[author] += 1;
    }
  }

  for (let [key, value] of Object.entries(authorDict)) {
    if (value > mostBlogs.blogs) {
      mostBlogs.author = key;
      mostBlogs.blogs = value;
    }
  }

  return mostBlogs;
};

// 该函数接收博客数组作为其参数。该函数返回博客文章点赞量最多的作者。返回值还包含作者收到的点赞总数：
const mostLikes = (blogs) => {
    let authorDict = {};
    let mostLikes = { author: null, likes: 0 };
  
    for (let i = 1; i < blogs.length; i++) {
      const author = blogs[i].author;
      if (!(author in authorDict)) {
        authorDict[author] = blogs[i].likes
      } else {
        authorDict[author] += blogs[i].likes
      }
    }
  
    for (let [key, value] of Object.entries(authorDict)) {
      if (value > mostLikes.likes) {
        mostLikes.author = key;
        mostLikes.likes = value;
      }
    }
  
    return mostLikes;
  };

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
