import { useState, useEffect } from "react";

/**
 * A component used to display notification.
 * @param {Object} object - a object
 * - message: Information to be displayed;
 * - color: color of css style;
 * - duration: The duration of component display, after that the component will be destroyed；
 *
 * @returns null or JSX
 */
const Notification = ({ message, color, duration }) => {
  // Used to control whether the component is displayed
  const [isVisible, setIsVisible] = useState(message !== null);

  // sets a timer and sets isVisible to false after (duration) seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    // In React's use Effect hook, cleanup can be accomplished by returning a function.
    // This returned function is called the cleanup function,
    // and React will call it the next time the same use Effect is executed
    // or before the component is unloaded.
    // This is used to perform some necessary cleanup operations,
    // such as unsubscribing, clearing timers, etc.,
    // to avoid leaving pending operations that may cause memory leaks
    // after the component is unloaded.
    return () => {
      setIsVisible(true); // Here must reset isVisible to true for it to work，I don't know why?
      clearTimeout(timer);
    };
  }, [message, duration]); // dependency. When values change, Effect will be executed again.

  const notificationStyle = {
    color: color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  // if no message or the status is not visible, return null
  if (message === null || !isVisible) return null;
  // else return view
  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
