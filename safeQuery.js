/* https://github.com/ReallyGood/safeQuery */
(function($, w, c){
if(!w.jQuery || !c) return;
c.w = c.warn || c.log; // safely use either warn or log
// jQuery and console.warn/log are available, we're good to go

var _find = $.find,
	_attr = $.fn.attr;

// 'duck punch' jQuery.find - Replace with a wrapper function with our warning which returns the original result
$.find = function(){
	var result = _find.apply(this, arguments);
	if(!result.length) c.w('jQuery Selector "' + result.selector + '" returned no matches');
	return result;
};

$.fn.attr = function(attr){
	if(arguments.length === 1) {
		var result = _attr.call(this, attr);
		if(result === void 0) {
			c.w('jQuery Attribute Getter for "' + attr + '" returned undefined for selector "' + $(this).selector + '"');
		}
		return result;
	} else {
		_attr.apply(this, arguments);
		return this;
	}
};

w.jQuery = w.$;

}(jQuery, window, console));