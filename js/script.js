let tableCreated = false
let rows = []

const tableId = "table"
const tableContainerId = "tableContainer"
const buttonDeleteRowId = "buttonDeleteRow"
const buttonAddRowId = "buttonAddRow"
const buttonCreateTableId = "buttonCreateTable"
const inputDeletingRowIndexId = "inputDeletingIndex"

function createTable() {
    if (!tableCreated) {
        const table = document.createElement(tableId)
        table.setAttribute("id", tableId)

        document.getElementById(tableContainerId).appendChild(table)
        tableCreated = true

        document.getElementById(buttonAddRowId).disabled = false
        document.getElementById(buttonDeleteRowId).disabled = false
        document.getElementById(inputDeletingRowIndexId).disabled = false
    } else {
        alert("Таблица уже существует.")
    }
}

function addRow() {
    const table = document.getElementById(tableId)
    const rowIndex = rows.length + 1

    const row = table.insertRow()

    const tdRowIndex = row.insertCell()
    tdRowIndex.textContent = rowIndex.toString()

    const tdValue = row.insertCell()
    tdValue.textContent = "value " + Math.floor(Math.random() * 99)

    rows.push(row)
}

function deleteRow() {
    const rowIndex = Number(document.getElementById(inputDeletingRowIndexId).value)

    if (rowIndex > 0 && rowIndex <= rows.length) {
        let row = rows[rowIndex - 1]
        rows.splice(rowIndex - 1, 1)
        row.remove()
        for (let i = rowIndex - 1; i < rows.length; ++i) {
            rows[i].cells[0].textContent = String(i + 1)
        }
    } else {
        alert("Такой строки нет.")
    }
}
