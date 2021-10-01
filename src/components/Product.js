import React from 'react';
import './Product.css';

const Product = ({ id, name, description, value, cagr, addFunc }) => {

    return (
        <div>
            
            <table align="center" >
                <center>
              <tr>
                  <td>
                      <h1> {name}</h1>

                  </td>
                  <td >
                      <p>Index value</p>
                      <h3>{value}</h3>
                      </td>
                  <td>
                      <p>CARG</p>
                      <h4>{cagr}%</h4>
                  </td>
                  <td >
                      <button type="button"  onClick={() => addFunc({id, name, description, value, cagr, units: 1})}
        >View Algo</button>
                      <button type="button">Buy</button>
                  </td>


              </tr>
                </center>
                    </table>
            
   
            
        </div>




  );
};

export default Product;