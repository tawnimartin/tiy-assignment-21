var Employee = Backbone.Model.extend ({

});
//master collection of employees
var EmployeesCollection = Backbone.Collection.extend ({
	url: "js/employees.json",
	model: Employee,

});
//handles displaying an individual Employee record
var EmployeeView = Backbone.View.extend({
	collection: FilteredEmployeesCollection,
	template: JST["employee"],
	tagName: "tr",

	initialize: function() {
		this.listenTo(this.model, "change", this.render());
	},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html(markup);
		return this;					
	}

});
//filtered collection
 var FilteredEmployeesCollection = EmployeesCollection.extend({ });

 var employees = new EmployeesCollection();
 var filtered = new FilteredEmployeesCollection(); 


$(function() {

	//html table headerTemplate
	var headerTemplate = JST["table_header"];
	$("body").append(headerTemplate);

	//render employees in tbody
	var filtered = new FilteredEmployeesCollection();
	filtered.on("add", function(model) {
		var employeeView = new EmployeeView({
			model: model
		});
		$("tbody").append(employeeView.render().el);
	});

	//
	employees.fetch({
		//only once, after employees.fetch, need to get an array of the keys for the headings
		success: function (collection) {
			//headings
			var headings = collection.models[0].keys();
			_.each(headings, function(key) {
				$("thead tr").append($("<th />").text(key));
			});
			//to render depts for sidebar, get all depts
			var depts = _.map(collection.models, function(e) {
				return e.get('Dept'); 
			});
			//then unique them, and show in sidebar
			var icon;
			_.each(_.uniq(depts), function(dept) {
				//add checkboxes template
				var checkboxTemplate = JST["checkboxes"]({ Dept: dept });
				$(".check-wrapper").append(checkboxTemplate);
				// //icons
				// console.log("this dept " + dept);
				
				// switch (dept) {
    // 			case "Sales":
    //     		icon = "<i class='fa fa-usd'></i>"; 
    //     		break;
    // 			case "Corp":
    //     		icon = "<i class='fa fa-building-o'></i>"; 
    //     		break;
    // 			case "IT":
    //     		icon = "<i class='fa fa-code'></i>"; 
    //     		break;
    // 			case "Exec Officers":
    //     		icon = "<i class='fa fa-pie-chart'></i>"; 
    //     		break;
    // 			default:
    //     		icon = "";
				// } 
				// $(".cat-text").prepend(icon);
				//add on class to make them blue
				$(".cat-text").addClass("on");		
			
			});

		}

	});

	//get departments and set in filtered collection
		function _deptGetandSet(checked) {
			var filteredRecords = [];
			var i;

			if(checked == "") {
				filtered.set(employees.models);
				return this;
			};
			
		//empty element
		$("tbody").empty();
		//for each department in checked array
		_.each(checked, function(d) {
				//filter through and grab the record with that dept, put in filteredRecords array
				var filteredRecords = employees.filter(function(e) {
	  			return e.get("Dept") === d.toString();
					});
				//update filtered collection
					filtered.set(filteredRecords);
					console.log(filtered.models);
			});
		//this.filtered.invoke('destroy');
		}

	//when checkbox is selected/deselected
	$(document).on('change', 'input.input-checkbox', function(e) {
		//getChecked() returns array of all the checked depts
		var checked = getChecked();
		//remove/add on class sidebar depts
		$el = $("div");
			$el.find(".cat-text").removeClass("on");
		_.each(checked, function(d) {
			$el.find(".cat-text[data-group-name='"+ d +"']").addClass("on");
		});
		_deptGetandSet(checked);

	});
	//on load
	$(window).load(function() {
	//get all checked, put in checkedArr
	this.getChecked = function() {
		var checkedArr = new Array();
	  $('input.input-checkbox:checked').each(function() {
	      checkedArr.push(this.name)
	  });
	  return checkedArr;
	};
	//call to get all departments array, 
	_deptGetandSet(getChecked());

	}); 


});