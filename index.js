
var s=0;
if (s == 0)
{
	console.log("work");
}
for(var s=0; s<5; s++)
{
	console.log(s);
}
setTimeout(function (){console.log("Привет мир");}, 2000);
console.log ("s = "+s);
console.log(__filename);
console.log(__dirname);