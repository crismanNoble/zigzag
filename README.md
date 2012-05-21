zigzag
======

*TLDR: I made [this](http://crismanNoble.github.com/zigzag) because I wanted an excuse to make a heatmap using d3.js.*

###Idea
I saw an awesome [heatmap](http://flowingdata.com/2012/04/11/how-recruiters-look-at-your-resume/) of how a recuiter looks at your resume that was created with eye tracking software.

It got me thinking. When we layout a grid showing ranked content, say top music albums, we use your standard left-to-right, top to bottom layout. 

![Standard](http://dl.dropbox.com/u/3898025/ltr.png)

But our eyes gravitate towards the top left, shouldn't the best content be closest to the top left? We could sort it by distance, but that seems odd too.

![Distance](http://dl.dropbox.com/u/3898025/dist.png)

So let's combine them and call it a ZigZag layout. I propose a new standard.

![ZigZag](http://dl.dropbox.com/u/3898025/zig.png)

[Check out the project demo page](http://crismanNoble.github.com/zigzag).

###Process
This gave me an excuse to play with [D3.js](https://github.com/mbostock/d3/wiki/Tutorials), and that is the main reason I tried it out. The crux of the entire visualization is this:

		:::javascript
		for (var j = 0; j<7; j++) {
			for(var i = 0; i < 5; i++) {
			distance.append("svg:rect").
			  attr("x", i*25).
			  attr("y", 25*j).
			  attr("height", 25).
			  attr("fill", "rgba(153, 0, 13, " + (100-3*man[i+j*5])/100 + ")").
			  attr("width", 25);
			};
		};

Which creates 7 rows of 5 squares, and varies the color opacity from 1 to 0 based on the given rank of each cell.

###Road Map *(if I had no job)*

*    Allow for variation in grid size
*    Start the standard pattern after the fold
*    Create plugin to work with a masonry layout