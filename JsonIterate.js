var colors = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

for(var i=0;i<colors.length;i++){
    if(i === 0) {
    console.log(colors[i]);
    }
    else if (i ===2) {
        console.log(colors[3]);
    }
};

for(var color of colors) {
    console.log(color);
}
for(var color in colors) {
    console.log(color);
}

var coloring = colors.forEach(function (item,index,array){
    if(index === 4) {
        console.log(item);
    }

});
