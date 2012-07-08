# safeQuery
Silent failures such as bad selectors are annoying time-wasters.
**safeQuery** warns you when jQuery calls return zero results.

Try the following in your console: `$('.oops')`

Tested with jQuery 1.7.2 and should work on all browsers. Just add `safeQuery.min.js` or its contents after loading jQuery.