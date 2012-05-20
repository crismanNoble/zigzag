 $(document).ready(function(){
Array.prototype.getIndex = function(data) {
    for (i=0; i<this.length; ++i) {
        if (this[i] == data) {
            return i;
        }
    }
    return -1;
};

//alert(lcn);

//add a path
//add a toggle for showing the rank


var dist = [1, 2, 5, 10, 16, 2, 4, 7, 12, 18, 5, 7, 9, 14, 21, 10, 12, 14, 20, 23, 16, 18, 21, 23, 28, 23, 26, 27, 29, 33, 30, 31, 32, 34, 35];

var rtl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

var man = [1, 2, 5, 9, 14, 3, 4, 7, 12, 18, 6, 8, 11, 16, 22, 10, 13, 17, 21, 26, 15, 19, 23, 27, 30, 20, 24, 28, 31, 33, 25, 29, 32, 34, 35];

var zag = [1, 2, 4, 7, 11, 3, 5, 8, 12, 15, 6, 9, 13, 16, 17, 10, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

var rectDemo = d3.select("#rect-demo").
  append("svg:svg").
  attr("width", 900).
  attr("height", 900);

for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		rectDemo.append("svg:rect").
		attr("x", i*25).
	  attr("y", 25*j).
	  attr("height", 25).
	  attr("fill", "rgba(8, 69, 148, " + (100-3*dist[i+j*5])/100 + ")").
	  attr("width", 25);
		};
};
//add little baby circles
for (var j = 0; j<7; j++) {
	for(var i = 0; i<5; i++){
		rectDemo.append("svg:circle").
			attr("cx", 25/2+25*i).
		  attr("cy", 25/2+25*j).
		  attr("r", 3/2).
		  attr("fill", "white");
	};
};





for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		rectDemo.append("svg:rect").
	  attr("x", 130 + i*25).
	  attr("y", 25*j).
	  attr("height", 25).
	  attr("fill", "rgba(8, 69, 148, " + (100-3*rtl[i+j*5])/100 + ")").
	  attr("width", 25);

	rectDemo.append("svg:text").
  attr("x", 130+25/2+i*25).
  attr("y", 15+j*25).
  attr("dx", 0).
  attr("text-anchor", "middle").
  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
  attr("fill","white").
  text(rtl[i+j*5]);

	  };


};

for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		rectDemo.append("svg:rect").
		  attr("x", 260 + i*25).
		  attr("y", 25*j).
		  attr("height", 25).
		  attr("fill", "rgba(8, 69, 148, " + (100-3*man[i+j*5])/100 + ")").
		  attr("width", 25);

		rectDemo.append("svg:text").
		  attr("x", 260+25/2+i*25).
		  attr("y", 15+j*25).
		  attr("dx", 0).
		  attr("text-anchor", "middle").
		  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
		  attr("fill","white").
		  text(man[i+j*5]);

	  };


};

for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		rectDemo.append("svg:rect").
	  attr("x", 390 + i*25).
	  attr("y", 25*j).
	  attr("height", 25).
	  attr("fill", "rgba(8, 69, 148, " + (100-3*zag[i+j*5])/100 + ")").
	  attr("width", 25);   
	  };
};

//resources = new Array("a", "b", "c", "d", "e", "f", "g", "h");
var lcn = man.getIndex(3);
var mapRTL = [];

for (var k=1; k<35; k++){
	mapRTL.push(rtl.getIndex(k));
	//console.log(mapRTL[i-1]);
};


//console.log(mapRTL[0]);

});