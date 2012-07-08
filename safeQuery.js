(function($){
if(typeof $ === 'undefined') return;

var _$ = $,
	props = {};

$.each($, function(i, prop){
	props[i] = prop;
});

window.$ = function(){
	var selection = _$.apply(this,arguments);
	selection.length==0 && console && console.warn && console.warn(selection.selector+':jQuery selector returned no matches');
	return selection;
};

$.each(props, function(i, prop){
	window.$[i] = props[i];
});

window.jQuery = $;

})(jQuery);