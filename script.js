const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class "price" to get the prices
  const priceElements = document.querySelectorAll(".price");

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Create a new row for the total price
  const table = document.querySelector("table");
  const newRow = table.insertRow(table.rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the cell values
  cell1.textContent = "Total Price";
  cell2.textContent = totalPrice;

  // Style the new row
  newRow.style.fontWeight = "bold";
};

getSumBtn.addEventListener("click", getSum);

