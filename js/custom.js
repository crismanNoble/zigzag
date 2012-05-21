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


var ltrMapCoordinates = "12.5,12.5 37.5,12.5 62.5,12.5 87.5,12.5 112.5,12.5 12.5,37.5 37.5,37.5 62.5,37.5 87.5,37.5 112.5,37.5 12.5,62.5 37.5,62.5 62.5,62.5 87.5,62.5 112.5,62.5 12.5,87.5 37.5,87.5 62.5,87.5 87.5,87.5 112.5,87.5 12.5,112.5 37.5,112.5 62.5,112.5 87.5,112.5 112.5,112.5 12.5,137.5 37.5,137.5 62.5,137.5 87.5,137.5 112.5,137.5 12.5,162.5 37.5,162.5 62.5,162.5 87.5,162.5 112.5,162.5";
var manMapCoordinates = "12.5,12.5 37.5,12.5 12.5,37.5 37.5,37.5 62.5,12.5 12.5,62.5 62.5,37.5 37.5,62.5 87.5,12.5 12.5,87.5 62.5,62.5 87.5,37.5 37.5,87.5 112.5,12.5 12.5,112.5 87.5,62.5 62.5,87.5 112.5,37.5 37.5,112.5 12.5,137.5 87.5,87.5 112.5,62.5 62.5,112.5 37.5,137.5 12.5,162.5 112.5,87.5 87.5,112.5 62.5,137.5 37.5,162.5 112.5,112.5 87.5,137.5 62.5,162.5 112.5,137.5 87.5,162.5 112.5,162.5";
var zagMapCoordinates = "12.5,12.5 37.5,12.5 12.5,37.5 62.5,12.5 37.5,37.5 12.5,62.5 87.5,12.5 62.5,37.5 37.5,62.5 12.5,87.5 112.5,12.5 87.5,37.5 62.5,62.5 37.5,87.5 112.5,37.5 87.5,62.5 112.5,62.5 62.5,87.5 87.5,87.5 112.5,87.5 12.5,112.5 37.5,112.5 62.5,112.5 87.5,112.5 112.5,112.5 12.5,137.5 37.5,137.5 62.5,137.5 87.5,137.5 112.5,137.5 12.5,162.5 37.5,162.5 62.5,162.5 87.5,162.5 112.5,162.5";

var distanceMap = d3.select("#distanceMap").
  append("svg:svg").
  attr("width", 130).
  attr("height", 175);

for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		distanceMap.append("svg:rect").
		attr("x", i*25).
	  attr("y", 25*j).
	  attr("height", 25).
	  attr("fill", "rgba(0, 90, 50, " + (100-3*dist[i+j*5])/100 + ")").
	  attr("width", 25);
		};
};

var ZigZagMaps = d3.select("#ZigZagMaps").
  append("svg:svg").
  attr("width", 130).
  attr("height", 175);

var lefttoright = d3.select('#lefttoright').
  append("svg:svg").
  attr("width", 130).
  attr("height", 175);

//standard
for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		lefttoright.append("svg:rect").
	  attr("x",  i*25).
	  attr("y", 25*j).
	  attr("height", 25).
	  attr("fill", "rgba(8, 69, 148, " + (100-3*rtl[i+j*5])/100 + ")").
	  attr("width", 25);

	lefttoright.append("svg:text").
  attr("x", 25/2+i*25).
  attr("y", 15+j*25).
  attr("dx", 0).
  attr("text-anchor", "middle").
  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
  attr("fill","white").
  attr("class", "numerals").
  text(rtl[i+j*5]);
//add the lines
		lefttoright.append("svg:polyline").
			  attr("points", ltrMapCoordinates).
			  attr("stroke", "white").
			  attr("class", "zigzags").
			  attr("fill", "none");

//add the circles
		lefttoright.append("svg:circle").
			attr("cx", 25/2+25*i).
		  attr("cy", 25/2+25*j).
		  attr("r", 3/2).
		  attr("class", "circles").
		  attr("fill", "white");
	  };


};
var distance = d3.select('#distance').
  append("svg:svg").
  attr("width", 130).
  attr("height", 175);
//distance preference to top
for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
		distance.append("svg:rect").
		  attr("x", i*25).
		  attr("y", 25*j).
		  attr("height", 25).
		  attr("fill", "rgba(153, 0, 13, " + (100-3*man[i+j*5])/100 + ")").
		  attr("width", 25);

//add the numerals
		distance.append("svg:text").
		  attr("x", 25/2+i*25).
		  attr("y", 15+j*25).
		  attr("dx", 0).
		  attr("text-anchor", "middle").
		  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
		  attr("fill","white").
		  attr("class", "numerals").
		  text(man[i+j*5]);

//add the lines
		distance.append("svg:polyline").
			  attr("points", manMapCoordinates).
			  attr("stroke", "white").
			  attr("class", "zigzags").
			  attr("fill", "none");

//add the circles
		distance.append("svg:circle").
			attr("cx", 25/2+25*i).
		  attr("cy", 25/2+25*j).
		  attr("r", 3/2).
		  attr("class", "circles").
		  attr("fill", "white");
	  };
};

//the zig zag effect
for (var j = 0; j<7; j++) {
	for(var i = 0; i < 5; i++) {
//add the rectangles and their colors
		ZigZagMaps.append("svg:rect").
		  attr("x", i*25).
		  attr("y", 25*j).
		  attr("height", 25).
		  attr("fill", "rgba(74, 20, 124, " + (100-3*zag[i+j*5])/100 + ")").
		  attr("width", 25);

//add the numerals
	  ZigZagMaps.append("svg:text").
		  attr("x", 25/2+i*25).
		  attr("y", 15+j*25).
		  attr("dx", 0).
		  attr("text-anchor", "middle").
		  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
		  attr("fill","white").
		  attr("class", "numerals").
		  text(zag[i+j*5]);

//add the lines
		ZigZagMaps.append("svg:polyline").
			  attr("points", zagMapCoordinates).
			  attr("stroke", "white").
			  attr("class", "zigzags").
			  attr("fill", "none");

//add the circles
		ZigZagMaps.append("svg:circle").
			attr("cx", 25/2+25*i).
		  attr("cy", 25/2+25*j).
		  attr("r", 3/2).
		  attr("class", "circles").
		  attr("fill", "white");
	  };
};

var mapRTL = [];
var mapMan = [];
var mapZag = [];
for (var k=1; k<36; k++){
	mapRTL.push(rtl.getIndex(k)+1);
	mapMan.push(man.getIndex(k)+1);
	mapZag.push(zag.getIndex(k)+1);
};

console.log(mapRTL);
console.log(mapMan);
console.log(mapZag);
var mapDirectionsZag;

for (var i=0; i<36; i++) {
	row = Math.ceil(mapZag[i]/5);
	col = mapZag[i]%5;
	if (col == 0) {
		col = 5;
	}
	col1 = col*25-12.5;
	row1 = row*25-12.5
	var pt = (col1 + "," +row1+ " ");
	mapDirectionsZag = mapDirectionsZag + pt;
}

var toggle = 0;

$("#rankToggle").click(function(){
	if (toggle == 0){
		$('.numerals').show();
		$('.circles').hide();
		$('.zigzags').hide();
		toggle = 1;
		return false;
	}
	if (toggle == 1){
		$('.numerals').hide();
		$('.circles').show();
		$('.zigzags').show();
		toggle = 0;
		return false;
	}

});


});