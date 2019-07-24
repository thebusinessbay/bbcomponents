import React, { Component } from 'react';
import ReactDOM from "react-dom";
import 'datatables.net-se/css/dataTables.semanticui.min.css';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class DataTable extends Component {
    constructor(props){
      super(props);
      this.props = props
    }

    componentDidMount() {
        const columns = this.props.columns;
        $("#bbtable").DataTable({
            "columnDefs": [ {
                "targets": columns.length-1,
                createdCell: (td, cellData, rowData, row, col) =>
                ReactDOM.render(
                    cellData, td),
              } ],
            columns
        });
        this.reloadTableData(this.props.dataSet);
    }

    componentWillUnmount(){
       $('#bbtable').DataTable().destroy(true);
    }

    reloadTableData(dataSet) {
        const table = $('#bbtable').DataTable();
        table.clear();
        table.rows.add(dataSet);
        table.draw();
    }

    shouldComponentUpdate(nextProps) {
        this.reloadTableData(nextProps.dataSet);
        return true;
    }


    render() {
        return (
        <div>
            <table className="ui celled table" id="bbtable"/>
        </div>);
    }
}

export default DataTable;
