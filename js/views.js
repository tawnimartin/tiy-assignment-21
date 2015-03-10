
var EmployeeView = Backbone.View.extend({
	template: JST["employee"],
	tagName: "tr",

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html(markup);
		return this;					
	}

});

var EmployeesCollectionView = Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.collection, "add remove", this.render);
	},

	render: function() {

		this.$el.empty();
		this.collection.each(function(model){
			var view = new EmployeeView({model: model})
			this.$el.append(view.render().el);
		},this)

		return this;
	}
});


var SidebarView = Backbone.View.extend ({
	template: JST["checkboxes"],	
	events: {

		'change input.input-checkbox': function() {

			var checked = this.getChecked();
			this.$(".cat-text").removeClass("on");
			_.each(checked, function(d) {
				this.$(".cat-text[data-group-name='"+ d +"']").addClass("on");
			}, this);

			this.trigger('checkbox:changed', checked);
		}

	},

	getChecked: function() {
		var checkedArr = new Array();
	  this.$('input.input-checkbox:checked').each(function() {
	      checkedArr.push(this.name)
	  });
	  return checkedArr;
	},

	render: function() {
		var depts = this.collection.pluck('Dept');
		var uDepts = _.uniq(depts);
		this.$el.empty();
		_.each(uDepts, function(dept) {
			if (dept === "Sales") {
    		deptIcon = "fa-usd";
    	} else if (dept === "IT") {
    		deptIcon = "fa-code"; 
    	} else if (dept === "Corp") {
    		deptIcon = "fa-building-o";
    	} else if (dept === "Exec Officers") {
    		deptIcon = "fa-pie-chart";
    	} else {
    		deptIcon = "fa-user";
    	}
			var markup = this.template({ Dept: dept, Icon: deptIcon });
			this.$el.append(markup);
			this.$(".cat-text[data-group-name='"+ dept +"']").addClass("on");
		}, this);
		return this;
	}

});

var TitlesView = Backbone.View.extend ({
	tagName: "tr",

	render: function() {

		var headings = this.collection.first().keys();
		_.each(headings, function(key) {
			this.$el.append($("<th />").text(key));
		}, this);

		return this;
	}

});
//
var getIcon = function() {
	
}
