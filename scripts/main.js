let start;
let end;
let context;
let offset;

const scale = 7.0;

const speeds = {
  'Horse': [4, 10],
  'Merchant Ship': [6, 24],
  'Cirrus Skiff (Ess 1)': [6, 24],
  'Agata': [30, 10],
  'Stormwind Rider': [100, 10]
}
const afn = () => console.log('hw!')

function drawCircle(point){
  context.lineWidth=1;
  context.beginPath();
  context.arc(point.X,point.Y,10,0,2*Math.PI,false);
  context.fillStyle='#008800';
  context.fill();
  context.strokeStyle='#003300';
  context.stroke();
}

function drawText(text,x,y,lineHeight){
  context.strokeStyle='#FFFFFF';
  context.fillStyle='#000000';
  var cars=text.split("\n");
  for(var ii=0;ii<cars.length;ii++){
    var line="";
    var words=cars[ii].split(" ");
    for(var n=0;n<words.length;n++){
      var testLine=line+words[n]+" ";
      var metrics=context.measureText(testLine);
      var testWidth=metrics.width;
      line=testLine;
    }
    context.lineWidth=2;
    context.fillText(line,x,y);
    context.strokeText(line,x,y);
    y+=lineHeight;
  }
}

const measure = (e) => {
  console.log('hello world!')
  var pos={
    'X':e.pageX-offset.left,
    'Y':e.pageY-offset.top
  };
  if(start==null){
    start=pos;
    drawCircle(start);
  } else if (end==null) {
    end=pos;
    context.lineWidth=1;
    context.beginPath();
    context.moveTo(start.X,start.Y);
    context.lineTo(end.X,end.Y);
    context.strokeStyle='#000000';
    context.stroke();
    drawCircle(end);
    drawCircle(start);
    var dist=Math.floor(Math.sqrt((end.X-start.X)*(end.X-start.X)+(end.Y-start.Y)*(end.Y-start.Y))*scale);
    var text=dist+" miles";
    for(var k in speeds){
      var days=Math.floor((dist/(speeds[k][0]*speeds[k][1]))*10)/10;
      var hours=Math.floor((days-Math.floor(days))*speeds[k][1]);
      if(days>=1) var dur=Math.floor(days)+' day'+(Math.floor(days)==1?'':'s');
      else var dur=hours+' hour'+(hours==1?'':'s');
      text+="\n"+k+": "+dur;
    }

    console.log(end.X);
    console.log(end.Y);
    var offsetX=0;
    var offsetY=0;
    if(end.X>2200){
      var offsetX=450;
    }
    if(end.Y>1400){
      var offsetY=200;
    }
    drawText(text,end.X+24-offsetX,end.Y+10-offsetY,32);
  } else {
    start=null;
    end=null;
    context.clearRect(0,0,2430,1558);
  }
}

window.onload = () => {
  const map = document.getElementById('map');
  context = map.getContext('2d');
  context.font='Bold 32px Arial';
  offset = {
    left: map.offsetLeft,
    top: map.offsetTop
  }

  map.onclick = measure;
};
