import { RowID, RowElement } from './interface.ts';

declare module 'crud' {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}