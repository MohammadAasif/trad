import React from "react";
import "./cart.css";

const CartItem = ({ id, name, description, value, units, cagr, updateCartUnits }) => (

    <div >
        <h2>Select the Best algo suted for you need</h2>

                <table align="center">

                    <tr>
                        <td>
                            <p>{name} </p>

                    </td>
                    
                        <td >
                            <p>Index value</p>
                        <h5>{value}</h5></td>

                            <td>
                                <p>CARG</p>
                                <h4>{cagr}%</h4>
                            </td>
                

            </tr>
            <tr row-aria-colspan="3">
                <p>{description}</p>
                <td >

                    <button >MODERATE RISK</button>
                    {units}<button onClick={() => updateCartUnits({ id, units: units + 1 })}>Buy</button>
                </td>

            </tr>
            </table>
          

        </div>


  
)

export default CartItem;
