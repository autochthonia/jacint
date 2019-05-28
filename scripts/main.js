const scale = 7.0;
const lineHeight = 32;
const transportation = {
  'Horse (10hr/d)': {
    rate: 4,
    maxLength: 10
  },
  'Merchant Ship (tireless)': {
    rate: 6,
    maxLength: 24
  },
  'Cirrus Skiff (tireless, Ess 1)': {
    rate: 6,
    maxLength: 24
  },
  'Agata (10hr/d)':  {
    rate: 30,
    maxLength: 10
  },
  'Stormwind Rider (10hr/d)':  {
    rate: 100,
    maxLength: 10
  },
}

const deepFreeze = o => {
  Object.freeze(o);
  if (o === undefined) return o;

  Object.getOwnPropertyNames(o).forEach(prop => {
    if (o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });

  return o;
}

deepFreeze(transportation);

const drawCircle = (point, context) => {
  context.beginPath();
  context.arc(point.X, point.Y, 10, 0, 2*Math.PI, false);
  context.fillStyle = '#008800';
  context.fill();
  context.strokeStyle = '#003300';
  context.stroke();
}

const drawText = (text, x, y, context) => {
  context.strokeStyle = '#FFFFFF';
  context.fillStyle = '#000000';
  context.lineWidth = 1.5;

  for (let line of text.split("\n")) {
    context.fillText(line, x, y);
    context.strokeText(line, x, y);
    y += lineHeight;
  }
}

const drawLine = (journey, context) => {
  context.beginPath();
  context.moveTo(journey.start.X, journey.start.Y);
  context.lineTo(journey.end.X, journey.end.Y);
  context.strokeStyle='#000000';
  context.stroke();
}

const calculateTravel = dist => {
  let text = dist + " miles";

  for (let mode in transportation ) {
    const rawHours = dist / transportation[mode].rate;
    const rawDays = rawHours / transportation[mode].maxLength;
    const days = Math.floor(rawDays);
    const hours = Math.round((rawDays - days) * transportation[mode].maxLength);
    const hourText = hours + ' hour' + ( hours === 1 ? '' : 's');
    const dur = (days >= 1)
      ? days + ' day' + (days === 1 ? '' : 's') + ', ' + hourText
      : hourText;
    text += "\n" + mode + ": " + dur;

  }
  return text;
}

const click = (e, journey, context) => {
  const pos = {
    X: e.pageX - context.canvas.offsetLeft,
    Y: e.pageY - context.canvas.offsetTop
  }

  if (! journey.start) {
    journey.start = pos;
    drawCircle(journey.start, context);

  } else if (! journey.end) {
    journey.end = pos;

    const dX = journey.end.X - journey.start.X;
    const dY = journey.end.Y - journey.start.Y;

    drawLine(journey, context);
    drawCircle(journey.end, context);
    drawCircle(journey.start, context);

    const dist = Math.floor(Math.sqrt(dX * dX + dY * dY) * scale);
    const text = calculateTravel(dist);

    const offsetX = (journey.end.X > 2200) ? 426 : -24;
    const offsetY = (journey.end.Y > 1400) ? 440 : -10;

    drawText(text, journey.end.X - offsetX, journey.end.Y - offsetY, context);

  } else {
    for (let prop in journey) journey[prop] = null;
    context.lineWidth = 1;
    context.clearRect(0,0,2430,1558);
  }
}

window.onload = () => {
  const map = document.getElementById('map');
  const context = map.getContext('2d');
  context.font = 'Bold 32px Arial';

  const journey = {
    start: null,
    end: null
  };

  map.addEventListener('click', event => click(event, journey, context));
};
