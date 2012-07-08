# safeQuery
Silent failures such as bad selectors are annoying time-wasters.
**safeQuery** warns you when jQuery calls return zero results.

Tested with jQuery 1.7.2 and should work on all browsers.
It's less than 400 bytes, just inline [safeQuery.min.js](https://raw.github.com/ReallyGood/safeQuery/master/safeQuery.min.js) after loading jQuery.

## Demo
Check out the [__DEMO__](http://reallygood.co.il/plugins/safeQuery/) page, and type the following in your console: `$('.oops')`

### Footnotes
* Licensed under MIT.
* Thanks @[Jake](https://github.com/JakeCigar) for [nudging me](https://forum.jquery.com/topic/warn-when-no-elements-are-returned#14737000003478244) in the right direction.
* You should read Paul Irish's awesome post ["How to fulfill your own feature request -or- Duck Punching with jQuery!"](http://paulirish.com/2010/duck-punching-with-jquery/).
* If complex chained selectors are your thing, be sure to check out [jQuery.inlog](https://github.com/Prinzhorn/jquery-inlog), which provides a deeper look inside the beast.