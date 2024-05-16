import { useState } from "react";

/**
 * 渲染一个搜索表单，允许用户提交搜索查询。
 * @param {Object} props - 该组件的属性对象。
 * @param {string} [props.defaultQuery=""] - 在搜索输入框中显示的默认文本。
 * @param {string} [props.placeholder] - 输入框的占位符文本。
 * @param {Function} props.onSubmit - 表单提交时执行的回调函数。
 * @param {Function} props.onChange - 表单内容改变时执行的回调函数。
 */
const SearchForm = ({
  title = "",
  defaultQuery = "",
  placeholder = "",
  onSubmit,
  onChange,
}) => {
  // 用来存储用户在搜索框中输入的文本。
  const [query, setQuery] = useState(defaultQuery);

  /**
   * 处理搜索输入框中的变化事件。
   * 当用户在输入框中键入文字时，此函数将被调用。
   * 同事将调用 `onChange` 回调函数，并传递当前的查询值。
   * @param {Event} event - 触发此函数的事件对象。
   * 该事件对象包含了与事件相关的数据，其中 event.target.value 包含了输入框的当前值。
   */
  const handleQueryChange = (event) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onChange(newValue);
  };

  /**
   * 处理表单提交事件。
   * 当用户提交表单时，此函数将被触发。首先，它阻止了表单的默认提交行为，即页面刷新。
   * 然后，它将调用 `onSubmit` 回调函数，并传递当前的查询值。
   * @param {Event} event - DOM 提交事件。
   */
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        {title}
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </form>
  );
};

export default SearchForm;