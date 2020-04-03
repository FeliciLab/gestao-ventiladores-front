const FieldContent = (props) => {
  return (
    <p>
      <strong>{props.data.label}: </strong> <span>{props.data.text}</span>
    </p>
  )
};
export default FieldContent