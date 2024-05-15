import { useState, useEffect } from "react";

/**
 * 用于显示提示信息的组件。
 * @param {Object} object - message: 显示的信息; color: 颜色; duration: 持续时间(秒)
 *
 * @returns
 */
const Notification = ({ message, color, duration }) => {
  // 用于控制组件是否显示
  const [isVisible, setIsVisible] = useState(message !== null);

  // 第一次渲染时执行，设置一个定时器，在 duration 秒后，将 isVisible 设置为 false
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000); // 将持续时间从秒转换为毫秒

    // 在 React 的 useEffect 钩子中，可以通过返回一个函数来实现清理工作。
    // 这个返回的函数被称为清理函数，React 会在下次执行相同的 useEffect 或组件卸载前调用它。
    // 这是用来执行一些必要的清理操作，比如取消订阅、清除定时器等，以避免在组件卸载后留下可能引起内存泄漏的挂起操作。
    return () => {
      setIsVisible(true);
      clearTimeout(timer);
    }; // 清理定时器。
  }, [message, duration]); // 依赖这里使用空数组 [] 也就是只在第一次渲染时执行

  const notificationStyle = {
    color: color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    transition: "opacity 0.5s", // 添加渐隐效果
    opacity: isVisible ? 1 : 0, // 根据 isVisible 状态控制透明度
  };
  if (message === null || !isVisible) return null;
  console.log("Notification Created");
  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
