function Table(props) {
  return (
    <div className="table-container">
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Id</th>
            <th>Age</th>
            <th>TechStack</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((element) => {
            return (
              <tr>
                <td>{element.Name}</td>
                <td>{element.EmpId}</td>
                <td>{element.Age}</td>
                <td>{element.TechStack}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
