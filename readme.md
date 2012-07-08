# safeQuery
Silent failures such as bad selectors are annoying time-wasters.
**safeQuery** warns you when jQuery calls return zero results.

Try the following in your console: `$('.oops')`

Tested with jQuery 1.7.2 and should work on all browsers.
It's less than 400 bytes, just inline [safeQuery.min.js](https://raw.github.com/ReallyGood/safeQuery/master/safeQuery.min.js) after loading jQuery.

### Footnotes
* Licensed under MIT.
* Thanks @[Jake](https://github.com/JakeCigar) for [nudging me](https://forum.jquery.com/topic/warn-when-no-elements-are-returned#14737000003478244) in the right direction.
* You should read Paul Irish's awesome post ["How to fulfill your own feature request -or- Duck Punching with jQuery!"](http://paulirish.com/2010/duck-punching-with-jquery/).