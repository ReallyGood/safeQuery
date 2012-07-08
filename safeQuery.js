(function($){
if(typeof $ === 'undefined') return;

window.$$ = function(){
	var selection=jQuery.apply(this,arguments);
	selection.length==0 && console && console.warn && console.warn(selection.selector+':jQuery selector returned no matches');
	return selection;
};


})(jQuery);