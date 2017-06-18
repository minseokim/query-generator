import React from 'react';
import SingleInput from './SingleInput';
import SelectedFieldsList from './SelectedFieldsList';
import SelectFieldsForm from './SelectFieldsForm';
import WhereClauseList from './WhereClauseList';
import PropTypes from 'prop-types';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput type="text"
                    label="table_name"
                    value={props.table_name}
                    description="Table Name"
                    onInputChange={props.onInputChange}
                    className=""
                    />
      <SingleInput type="number"
                    label="start_time"
                    value={props.start_time}
                    description="Start Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SingleInput type="number"
                    label="end_time"
                    value={props.end_time}
                    description="End Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SelectedFieldsList selectedFieldsData={props.select_fields}
                          onSelectFieldsAdd={props.onSelectFieldsAdd}
                          onInputChange={props.onInputChange}
                          onRemoveSelectFieldClick={props.onRemoveSelectFieldClick}
                        />

      <WhereClauseList  whereClauseData={props.where_clause}
                        onInputChange={props.onInputChange}
                        onWhereClauseAdd={props.onWhereClauseAdd}
                        onRemoveWhereClause={props.onRemoveWhereClause}
                        />
    </form>
    )
}

UserForms.propTypes = {
  table_name : PropTypes.string.isRequired,
  start_time: PropTypes.number.isRequired,
  end_time: PropTypes.number.isRequired,
  select_fields: PropTypes.array.isRequired,
  where_clause: PropTypes.array.isRequired,
  onSelectFieldsAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onWhereClauseAdd: PropTypes.func.isRequired,
  onRemoveSelectFieldClick: PropTypes.func.isRequired,
  onRemoveWhereClause: PropTypes.func.isRequired
}
export default UserForms;