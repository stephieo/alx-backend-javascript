/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var studentOne = {
    firstName: 'Stanley',
    lastName: 'Tucci',
    age: 45,
    location: 'Italy',
};
var studentTwo = {
    firstName: 'Bobby',
    lastName: 'Hernandez',
    age: 25,
    location: ' Mexico',
};
var studentsList = [studentOne, studentTwo];
function renderTable(students) {
    // Create Table
    var table = document.createElement('table');
    // Create Table Headers
    var headers = table.createTHead();
    var headerRow = headers.insertRow();
    var header1 = headerRow.insertCell();
    var header2 = headerRow.insertCell();
    header1.textContent = 'First Name';
    header2.textContent = 'Location';
    // Create Table Body
    var tbody = table.createTBody();
    students.forEach(function (student) {
        // Create Table Row
        var row = tbody.insertRow();
        // Create and Insert Cells
        var firstCell = row.insertCell();
        firstCell.textContent = student.firstName;
        var secondCell = row.insertCell();
        secondCell.textContent = student.location;
    });
    // Append the table to the document body
    document.body.appendChild(table);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPQSxJQUFNLFVBQVUsR0FBWTtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ3BCO0FBRUQsSUFBTSxVQUFVLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFdBQVc7SUFDckIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUMsU0FBUztDQUNyQjtBQUVELElBQU0sWUFBWSxHQUFjLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXhELFNBQVMsV0FBVyxDQUFDLFFBQW1CO0lBQ3BDLGVBQWU7SUFDZixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlDLHVCQUF1QjtJQUN2QixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFdkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFDbkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFFakMsb0JBQW9CO0lBQ3BCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVsQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztRQUNyQixtQkFBbUI7UUFDbkIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTlCLDBCQUEwQjtRQUMxQixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCx3Q0FBd0M7SUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgU3R1ZGVudCB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkZW50T25lOiBTdHVkZW50ID0ge1xuICAgIGZpcnN0TmFtZTogJ1N0YW5sZXknLFxuICAgIGxhc3ROYW1lOiAnVHVjY2knLFxuICAgIGFnZTogNDUsXG4gICAgbG9jYXRpb246ICdJdGFseScsXG59XG5cbmNvbnN0IHN0dWRlbnRUd286IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiAnQm9iYnknLFxuICAgIGxhc3ROYW1lOiAnSGVybmFuZGV6JyxcbiAgICBhZ2U6IDI1LFxuICAgIGxvY2F0aW9uOicgTWV4aWNvJyxcbn1cblxuY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudE9uZSxzdHVkZW50VHdvXTtcblxuZnVuY3Rpb24gcmVuZGVyVGFibGUoc3R1ZGVudHM6IFN0dWRlbnRbXSk6IHZvaWQge1xuICAgIC8vIENyZWF0ZSBUYWJsZVxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIC8vIENyZWF0ZSBUYWJsZSBIZWFkZXJzXG4gICAgY29uc3QgaGVhZGVycyA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gaGVhZGVycy5pbnNlcnRSb3coKTtcbiAgICBjb25zdCBoZWFkZXIxID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcbiAgICBjb25zdCBoZWFkZXIyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcblxuICAgIGhlYWRlcjEudGV4dENvbnRlbnQgPSAnRmlyc3QgTmFtZSc7XG4gICAgaGVhZGVyMi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG5cbiAgICAvLyBDcmVhdGUgVGFibGUgQm9keVxuICAgIGNvbnN0IHRib2R5ID0gdGFibGUuY3JlYXRlVEJvZHkoKTtcblxuICAgIHN0dWRlbnRzLmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIFRhYmxlIFJvd1xuICAgICAgICBjb25zdCByb3cgPSB0Ym9keS5pbnNlcnRSb3coKTtcblxuICAgICAgICAvLyBDcmVhdGUgYW5kIEluc2VydCBDZWxsc1xuICAgICAgICBjb25zdCBmaXJzdENlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBmaXJzdENlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcblxuICAgICAgICBjb25zdCBzZWNvbmRDZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgc2Vjb25kQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHRhYmxlIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=