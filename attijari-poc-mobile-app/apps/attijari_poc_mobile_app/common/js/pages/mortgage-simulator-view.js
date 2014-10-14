function checnum(as)
{
var dd = as.value;
if(isNaN(dd))
{
dd = dd.substring(0,(dd.length-1));
as.value = dd;
}         

} function loan() {
var a = document.first.aa.value;
var b = document.first.bb.value;
var c = document.first.cc.value; 
var n = c * 12;
var r = b/(12*100);
var p = (a * r *Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
var prin = Math.round(p*100)/100;
document.first.monthlyPaymentField.value = prin;
var mon = Math.round(((n * prin) - a)*100)/100;
document.first.monthlyAverageInterestField.value = mon;
var tot = Math.round((mon/n)*100)/100;
document.first.monthlyInterestField.value = tot;
for(var i=0;i<n;i++)
{
var z = a * r * 1;
var q = Math.round(z*100)/100;
var t = p - z;
var w = Math.round(t*100)/100;
var e = a-t;
var l = Math.round(e*100)/100;
a=e;
} }

