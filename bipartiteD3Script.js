var data=[["O.crassicolis","Tapir",1],
["O.leusermontis","Tapir",17],
["O.semifex","Tapir",1],
["O.rutilans","Tapir",2],
["O.pedator","Tapir",2],
["O.sp1","Tapir",1],
["O.sp2","Tapir",1],
["P.maurus","Tapir",1],
["O.crassicolis","Sambar",0],
["O.leusermontis","Sambar",0],
["O.semifex","Sambar",2],
["O.rutilans","Sambar",0],
["O.pedator","Sambar",0],
["O.sp1","Sambar",0],
["O.sp2","Sambar",0],
["P.maurus","Sambar",0],
["O.crassicolis","Tiger",0],
["O.leusermontis","Tiger",0],
["O.semifex","Tiger",50],
["O.rutilans","Tiger",0],
["O.pedator","Tiger",0],
["O.sp1","Tiger",0],
["O.sp2","Tiger",0],
["P.maurus","Tiger",0],
["O.crassicolis","Python",0],
["O.leusermontis","Python",0],
["O.semifex","Python",1],
["O.rutilans","Python",0],
["O.pedator","Python",0],
["O.sp1","Python",0],
["O.sp2","Python",0],
["P.maurus","Python",0],
["O.crassicolis","Sun bear",0],
["O.leusermontis","Sun bear",8],
["O.semifex","Sun bear",4],
["O.rutilans","Sun bear",0],
["O.pedator","Sun bear",0],
["O.sp1","Sun bear",0],
["O.sp2","Sun bear",1],
["P.maurus","Sun bear",0],
["O.crassicolis","Civet",0],
["O.leusermontis","Civet",18],
["O.semifex","Civet",15],
["O.rutilans","Civet",0],
["O.pedator","Civet",0],
["O.sp1","Civet",0],
["O.sp2","Civet",0],
["P.maurus","Civet",0]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','Tiger':'#ff7f0e','Tapir':'#393b79','Sun bear':'#1f77b4','Sambar':'#8c564b','Python':'#7b4173','Civet':'#bcbd22'};




var g1 = svg.append("g").attr("transform","translate(245,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(5)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.secondary])
.sortSecondary(sort(["Tiger","Tapir","Sun bear","Python","Sambar","Civet"]))
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Dung Beetle");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Dung Type");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("Site");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -36.8:29.6))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -189:168))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.0%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 

function mouseover(d){
bp1.mouseover(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}

                     function mouseout(d){
bp1.mouseout(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}


