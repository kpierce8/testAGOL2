define([
	'dojo/_base/declare',
	'dojo/_base/lang',
	'dojo/on',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dojo/dom-class',
	'text!widgets/edit/editTools.tpl.html'
	], function(declare, lang, on, _WidgetBase, _TemplatedMixin, domClass, template) {
		return declare([_WidgetBase, _TemplatedMixin], 
			{	
			declaredClass: 'widgets.edit.EditTools',
			templateString: template,
			options: {},
			editing: false,
			map: null,

			constructor: function(options, srcRefNode) {
				this.inherited(arguments);
				this.options = options || {};
				this.map = this.options.map;
				this.domNode = srcRefNode;
			},
			postCreate: function() {
				this.own(
					on(this.editNode, 'click', lang.hitch(this, this._addRequest))
					);
			},

			startup: function(){
				this._init();
			},

			destroy: function(){
				this.inherited(arguments);
			},

			_init: function() {
			},

			_addRequest: function() {
				this.editing = !this.editing;
				this._toggleEditButton();
			},
			_toggleEditButton: function() {
				if (this.editing) {
					this.editNode.innerHTML = 'Adding Request';
				} else {
					this.editNode.innerHTML = 'Add Request';
				}
				domClass.toggle(this.editNode, 'btn-primary');
				domClass.toggle(this.editNode, 'btn-success');
			}

		});
	});