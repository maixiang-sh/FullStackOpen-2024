const Notification = ({ message, isSuccess }) => {
  if (message === null) {
    return null;
  }
  
  const style = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    color: `${isSuccess ? "green" : "red"}`,
    backgroundColor: "Gainsboro",
    border: `1px solid ${isSuccess ? "green" : "red"}`,
    borderWidth: "3px"
  };

  return <div style={style}>{message}</div>;
};

export default Notification;
