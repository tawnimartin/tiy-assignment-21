$(function() {

	var employees = new EmployeesCollection;
	var filteredEmployees = new EmployeesCollection;

	var employeesView = new EmployeesCollectionView({
		collection: filteredEmployees, 
		el: $("tbody") 
	});

	var titlesView = new TitlesView({
		collection: employees
	});

	var sidebarView = new SidebarView({
		collection: employees
	});

	sidebarView.on("checkbox:changed", function(checked) {
		var models = employees.filter(function(model) {
			return _.contains(checked, model.get("Dept"));
		});
		if (!models.length) {
			models = employees.models;
		}
		filteredEmployees.set(models);
	});

	$("thead").html(titlesView.el)
	$(".check-wrapper").html(sidebarView.el)

	employees.fetch({

		success: function() {
			titlesView.render();
			sidebarView.render();

			filteredEmployees.set(employees.models);

		}

	})

})

