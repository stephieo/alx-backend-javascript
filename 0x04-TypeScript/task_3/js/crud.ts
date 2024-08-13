/**
 * Inserts a row and returns an object containing the new row's ID.
 * @param {Object} row
 * @returns {number}
 */
export function insertRow(row: any) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Deletes a row based on the provided row ID.
 * @param {number} rowId
 */
export function deleteRow(rowId: any) {
  console.log('Delete row id', rowId);
  return;
}

/**
 * Updates a row based on the provided row ID.
 * @param {number} rowId
 * @param {Object} row
 * @returns {number}
 */
export function updateRow(rowId: any, row: any) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
