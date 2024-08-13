/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof (salary) == 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    }
    else {
        employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass == 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZQTtJQUFBO0lBVUEsQ0FBQztJQVRHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQjtJQUM5QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNJLE9BQU8sd0JBQXdCO0lBQ25DLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQjtJQUN0QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBVUEsQ0FBQztJQVRHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLGtCQUFrQjtJQUM3QixDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCO0lBQ2hDLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQjtJQUM1QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUFzQjtJQUMxQyxJQUFJLE9BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxPQUFPLENBQUM7SUFDdkIsQ0FBQztJQUNELE9BQU8sSUFBSSxRQUFRLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzVDLE9BQU8sUUFBUSxZQUFZLFFBQVEsQ0FBQztBQUN0QyxDQUFDO0FBRUgsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDN0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO1NBQU0sQ0FBQztRQUNKLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7QUFDTCxDQUFDO0FBSUQsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDcEMsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFLENBQUM7UUFDdkIsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCJcbiAgICB9XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCJcbiAgICB9XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcbiAgICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgZnJvbSBob21lXCJcbiAgICB9XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCJcbiAgICB9XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlcnwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgICBpZiAodHlwZW9mKHNhbGFyeSkgPT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXJlY3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogVGVhY2hlciB8IERpcmVjdG9yKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xuICB9XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gICAgfVxufVxuXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgICBpZiAodG9kYXlDbGFzcyA9PSAnTWF0aCcpIHtcbiAgICAgICAgcmV0dXJuICdUZWFjaGluZyBNYXRoJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==