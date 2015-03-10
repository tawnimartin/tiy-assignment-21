
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
		//grab all the time tags
		//use moment .datetime to grab the attribute
		//$Time.each. attr("datetime") <-- gives you uformatted date string
		//pass to .moment("") and put result in the text property of the time tag
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
		var depts = _.uniq(this.collection.pluck('Dept'));
		var icons = _.uniq(this.collection.pluck('Icon'));
		this.$el.empty();
		for(var i = 0; i < depts.length; i++){
    	var markup = this.template({ Dept: depts[i], Icon: icons[i] });
			this.$el.append(markup);
			this.$(".cat-text[data-group-name='"+ depts[i] +"']").addClass("on");
		};
		return this;
	}

});

var TitlesView = Backbone.View.extend ({
	tagName: "tr",

	render: function() {

		var headings = this.collection.first().keys();
		var i = headings.indexOf("Icon");
		headings.splice(i, 1);
		_.each(headings, function(key) {
			this.$el.append($("<th />").text(key));
		}, this);

		return this;
	}

});
//
var getIcon = function() {

}
