export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (const dept in employeesList) {
        count += 1;
      }
      return count;
    },
  };
}
