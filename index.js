/* Your Code Here */
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
  }
  
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map((employee) => createEmployeeRecord(employee));
  }
  
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date).hour;
    const timeOut = this.timeOutEvents.find((event) => event.date === date).hour;
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
  }
  
  function allWagesFor() {
    const dates = this.timeInEvents.map((event) => event.date);
    return dates.reduce((acc, date) => acc + wagesEarnedOnDate.call(this, date), 0);
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
  }
  
