/*global define */
define(['jquery'], function ($) {
	'use strict';

	return function(){
		var now = new Date();
		var self = {
			text:"Last login: "+now.toString()+" on ttys001<br>~ <span class=\"red\">❯</span><span class=\"green\">❯</span><span class=\"blue\">❯</span> ",
			update:function(){
				$('#prompt').html(self.text+(self.underscore?'_':''));
				self.underscore=!self.underscore;
			},
			rate:1000,
			underscore:true
		}
		self.update();
		setInterval(self.update,self.rate);
	}
});