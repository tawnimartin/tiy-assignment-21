var Employee = Backbone.Model.extend ({

});

var EmployeesCollection = Backbone.Collection.extend ({
	url: "js/employees.json",
	model: Employee

});

