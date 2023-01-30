function RadioButton(props) {
  return (
    <div className="radio">
      <input
        name={props.name}
        type="radio"
        value={props.value}
        onClick={(e) => {
          props.setData(
            props.data.sort((a, b) =>
              a[props.value] < b[props.value] ? -1 : 1
            )
          );
          props.setFlag(!props.flag);
        }}
      ></input>
      <label>Sort By {props.value}</label>
    </div>
  );
}

export default RadioButton;
