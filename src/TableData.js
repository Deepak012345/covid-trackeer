import React from 'react';
import './tableCustom.css';
 
function TableData(props) {
    return (
        <div className="table">
           <div className="tableCustom">
            <table className="table ">
            <thead className="thead-dark">
                <tr>
                    <th>Country</th>
                    <th>Total cases</th>
                </tr>
            </thead>
            <tbody>
                {props.countries.map(country => (
               <tr>
                   <td>{country.country}</td>
                   <td>{country.cases}</td>
               </tr>
           ))}
           </tbody>
            </table>
          
            </div>
        </div>
    )
}

export default TableData;
