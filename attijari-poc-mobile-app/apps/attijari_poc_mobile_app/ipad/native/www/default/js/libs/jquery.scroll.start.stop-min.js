
/* JavaScript content from js/libs/jquery.scroll.start.stop-min.js in folder common */
/**
 * Author: @jsdev | Anthony Delorie
 * Date: 7/13/13
 * Updated custom GitHub project doesn't support 1.9+ yet as .handle was deprecated..
 * forked http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
 */(function(){var e=jQuery.event.special,t="D"+ +(new Date),n="D"+(+(new Date)+1);e.scrollstart={setup:function(){var n,r=function(t){var r=this,i=arguments;if(n)clearTimeout(n);else{t.type="scrollstart";$(r).trigger(t.type,i)}n=setTimeout(function(){n=null},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(t,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(t))}};e.scrollstop={latency:300,setup:function(){var t,r=function(n){var r=this,i=arguments;t&&clearTimeout(t);t=setTimeout(function(){t=null;n.type="scrollstop";$(r).trigger(n.type,i)},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(n,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(n))}}})();