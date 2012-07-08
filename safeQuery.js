(function($){
if(typeof $ == 'undefined') return;

var _$ = $,
	props = {},
	i, j;

for(i in $) {
	if($.hasOwnProperty(i)) props[i] = $[i];
}

window.$ = function(){
	var result = _$.apply(this,arguments);
	!result.length && console && console.warn && console.warn('jQuery Selector "' + result.selector + '" returned no matches');
	return result;
};

for(j in props) {
	if(props.hasOwnProperty(j)) window.$[j] = props[j];
}

window.jQuery = $;

})(jQuery);