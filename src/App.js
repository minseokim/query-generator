import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        table_name: "",
        start_time: "",
        end_time: "",
        select_fields: [],
        where_clause: [],
        current_select_fields: "",
        name: "",
        value: "",
        operator : ""
      }
    };
    this.handleSingleInputEdit = this.handleSingleInputEdit.bind(this);

    this.handleSelectFieldsAdd = this.handleSelectFieldsAdd.bind(this);
  }

  handleSingleInputEdit(label, value) {
    this.setState(prevState => {
      prevState.formData[label] = value;
      return prevState;
    });
  }

  handleSelectFieldsAdd() {
    this.setState(prevState => {
      const newSelectedField = prevState.formData.current_select_fields;
      prevState.formData.select_fields.push(newSelectedField);
      //Clear out select fields input after value is added
      prevState.formData.current_select_fields = "";
      return prevState;
    });
  }

  handleWhereClauseFormEdit(event) {

  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          Query Generator
        </header>
        <section className="container-fluid App__container">
          <div className="row">
            <div className="col-sm-6">
              <UserForms
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
                onSingleInputEdit={this.handleSingleInputEdit}
                formData={this.state.formData}
                currentWhereClauseData={this.state.formData.current_where_clause}
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
              />
            </div>
            <div className="col-sm-6">
              <QueryDisplay query={this.state.query} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
