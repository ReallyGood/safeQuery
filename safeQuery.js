/*! https://github.com/ReallyGood/safeQuery */
(function($, w){
if(!w.jQuery || !w.console) return;
if(!console.warn) console.warn = console.log;
// jQuery and console.warn/log are available, we're good to go

var _$ = $,
	props = {},
	i, j;

// backup all properties on the jQuery namespace
for(i in $) {
	if($.hasOwnProperty(i)) props[i] = $[i];
}

// 'duck punch' jQuery - Replace with a wrapper function with our warning which returns the original result
w.$ = function(){
	var result = _$.apply(this, arguments);
	if(!result.length) console.warn('jQuery Selector "' + result.selector + '" returned no matches');
	return result;
};

// restore all original props to the new object
for(j in props) {
	if(props.hasOwnProperty(j)) w.$[j] = props[j];
}
w.jQuery = w.$;

}(jQuery, window));