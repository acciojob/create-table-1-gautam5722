function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

	let newRow = table.insertRow(0);
	let col1 = newRow.insertCell(0);
	let col2 = newRow.insertCell(1);

	col1.textContent = "New Cell1";
	col2.textContent = "New Cell2";
  
  
}
