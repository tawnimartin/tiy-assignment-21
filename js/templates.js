this["JST"] = this["JST"] || {};
this["JST"]["checkboxes"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--checkbox1-->\n    <div class=\"cat-text\" data-group-name=\""
    + alias3(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Dept","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa "
    + alias3(((helper = (helper = helpers.Icon || (depth0 != null ? depth0.Icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Icon","hash":{},"data":data}) : helper)))
    + "\"></i> "
    + alias3(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Dept","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"checkbox-switch\">\n			<input type=\"checkbox\" checked=\"\" value=\"1\" name=\""
    + alias3(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Dept","hash":{},"data":data}) : helper)))
    + "\" class=\"input-checkbox\" id=\"toolbar-active\">\n			<div class=\"checkbox-animate\">\n				<span class=\"checkbox-off\">OFF</span>\n				<span class=\"checkbox-on\">ON</span>\n        \n			</div>\n		</div>\n    <!--/checkbox1-->\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["employee"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n    <td>"
    + alias3(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias3(((helper = (helper = helpers.Role || (depth0 != null ? depth0.Role : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Role","hash":{},"data":data}) : helper)))
    + "</td> \n    <td>"
    + alias3(((helper = (helper = helpers.Manager || (depth0 != null ? depth0.Manager : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Manager","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias3(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Phone","hash":{},"data":data}) : helper)))
    + "</td>\n    <td><i class=\"fa "
    + alias3(((helper = (helper = helpers.Icon || (depth0 != null ? depth0.Icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Icon","hash":{},"data":data}) : helper)))
    + "\"></i> "
    + alias3(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Dept","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias3(((helper = (helper = helpers.StartDate || (depth0 != null ? depth0.StartDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"StartDate","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"useData":true});