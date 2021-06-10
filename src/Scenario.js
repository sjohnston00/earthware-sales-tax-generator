import React, { useState } from "react";

export default function Scenario({ data, types, number }) {
  const [receipt, setReceipt] = useState([]);

  const showReceipt = () => {
    setReceipt([]); //reset the receipt array
    alert("Open your browser console to view receipt");
    let preTaxItemTotal = 0; //show the price of the items before tax
    let salesTaxTotal = 0; //total amount sales tax
    let importTaxTotal = 0; //total amount import tax

    const salesTax = 0.1; //10%
    const importTax = 0.05; //5%
    for (let index = 0; index < data.length; index++) {
      const item = data[index]; //get the object in the array
      let itemSalesTax = 0;
      let itemImportTax = 0;
      if (
        item.type !== types.FOOD &&
        item.type !== types.BOOK &&
        item.type !== types.MEDICAL_PRODUCT //if the item is not Book,food or Medical Product then addd sales tax
      ) {
        itemSalesTax = item.price * salesTax;
        salesTaxTotal += itemSalesTax;
      }

      if (item.imported) {
        //if item is imported the add import tax
        itemImportTax = item.price * importTax;
        importTaxTotal += itemImportTax;
      }

      preTaxItemTotal += item.price;
      //push the items info to the array along with the receipt information
      receipt.push({
        ...item,
        itemSalesTax: itemSalesTax.toFixed(2),
        itemImportTax: itemImportTax.toFixed(2),
        ItemTaxTotal: itemSalesTax + itemImportTax,
        ItemTotal: itemSalesTax + itemImportTax + item.price
      });
    }

    //calculate the total tax paid
    const taxTotal = Number(
      Math.ceil((salesTaxTotal + importTaxTotal) * 20) / 20
    );

    //calculate the subtotal for the entire receipt
    const subtotal = preTaxItemTotal + taxTotal;

    let receiptString = ``;
    //loop through each item in the array and display the taxes paid
    //NOTE: Because this is a template string this needs to have no indentation
    receipt.forEach((item) => {
      receiptString += `${item.name}: £${item.price}
Sales Tax: ${item.itemSalesTax}
Import Tax: ${item.itemImportTax}
Item Subtotal Tax: ${item.ItemTaxTotal}
Item Subtotal: ${item.ItemTotal}
------------------------------------
`;
    }); //end of loop

    //adding a footer to the receipt for the totals
    receiptString += `Item Total: £${preTaxItemTotal.toFixed(2)}
Total Sales Taxes (10% on applicable items): £${salesTaxTotal.toFixed(2)}
Total Import Taxes (5% on imported items): £${importTaxTotal.toFixed(2)}
Total Taxes: £${taxTotal}
Subtotal: £${subtotal.toFixed(2)}`;

    console.log(receiptString);
  };
  return (
    <div>
      <h2>Scenario {number}</h2>
      {data.map((item, index) => (
        <div key={index}>
          {item.name} - £{item.price}
        </div>
      ))}
      <button onClick={showReceipt}>View Receipt</button>
      <hr />
    </div>
  );
}
