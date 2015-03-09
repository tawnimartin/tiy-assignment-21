var Employee = Backbone.Model.extend ({

});
//master collection of employees
var EmployeesCollection = Backbone.Collection.extend ({
	url: "js/employees.json",
	model: Employee

});

