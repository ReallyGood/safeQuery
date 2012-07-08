(function($){
if(typeof $ == 'undefined' || typeof console == 'undefined') return;
if(!console.warn) console.warn = console.log;

var _$ = $,
	props = {},
	i, j;

for(i in $) {
	if($.hasOwnProperty(i)) props[i] = $[i];
}

window.$ = function(){
	var result = _$.apply(this,arguments);
	if(!result.length) console.warn('jQuery Selector "' + result.selector + '" returned no matches');
	return result;
};

for(j in props) {
	if(props.hasOwnProperty(j)) window.$[j] = props[j];
}

})(jQuery);