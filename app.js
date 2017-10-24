'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookCust: 6.3,
  totalSalesByHour: [],
  totalSalesDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour = 0;
    var cookiesDay = 0;
    for (var i = 0; i < firstAndPike.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(firstAndPike.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesByHour.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total First and Pike: ' + cookiesDay);
    if (i = firstAndPike.hours.length) {
      this.totalSalesDay = cookiesDay;
    }
    return cookiesDay;
  },
};

firstAndPike.hourlySales();
console.log('Sales Each Hour: ' + firstAndPike.totalSalesByHour);

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookCust: 1.2,
  totalSalesByHour: [],
  totalSalesDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour;
    var cookiesDay = 0;
    for (var i = 0; i < seaTac.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(seaTac.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesByHour.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total SeaTac: ' + cookiesDay);
    if (i = seaTac.hours.length) {
      this.totalSalesDay = cookiesDay;
    }
    return cookiesDay;
  },
};

seaTac.hourlySales();
console.log('Sales Each Hour: ' + seaTac.totalSalesByHour);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookCust: 3.7,
  totalSalesByHour: [],
  totalSalesDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour;
    var cookiesDay = 0;
    for (var i = 0; i < seattleCenter.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(seattleCenter.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesByHour.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Seattle Center: ' + cookiesDay);
    if (i = seattleCenter.hours.length) {
      this.totalSalesDay = cookiesDay;
    }
    return cookiesDay;
  },
};

seattleCenter.hourlySales();
console.log('Sales Each Hour: ' + seattleCenter.totalSalesByHour);

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookCust: 2.3,
  totalSalesByHour: [],
  totalSalesDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour;
    var cookiesDay = 0;
    for (var i = 0; i < capitolHill.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(capitolHill.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesByHour.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Capitol Hill: ' + cookiesDay);
    if (i = capitolHill.hours.length) {
      this.totalSalesDay = cookiesDay;
    }
    return cookiesDay;
  },
};

capitolHill.hourlySales();
console.log('Sales Each Hour: ' + capitolHill.totalSalesByHour);

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookCust: 4.6,
  totalSalesByHour: [],
  totalSalesDay: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour;
    var cookiesDay = 0;
    for (var i = 0; i < alki.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(alki.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesByHour.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Alki: ' + cookiesDay);
    if (i = alki.hours.length) {
      this.totalSalesDay = cookiesDay;
    }
    return cookiesDay;
  },
};

alki.hourlySales();
console.log('Sales Each Hour: ' + alki.totalSalesByHour);

function displaySales() {
  var list = document.createElement('ul');
  var listArr = [];

  listArr.push('<li class="bold">1st and Pike Sales</li>');
  for (var i = 0; i < firstAndPike.totalSalesByHour.length; i++) {
    listArr.push('<li>' + firstAndPike.hours[i] + ': ' + firstAndPike.totalSalesByHour[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + firstAndPike.totalSalesDay + ' Cookies</li>');

  listArr.push('<li class="bold">SeaTac Airport Sales</li>');
  for (i = 0; i < seaTac.totalSalesByHour.length; i++) {
    listArr.push('<li>' + seaTac.hours[i] + ': ' + seaTac.totalSalesByHour[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + seaTac.totalSalesDay + ' Cookies</li>');

  listArr.push('<li class="bold">Seattle Center Sales</li>');
  for (i = 0; i < seattleCenter.totalSalesByHour.length; i++) {
    listArr.push('<li>' + seattleCenter.hours[i] + ': ' + seattleCenter.totalSalesByHour[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + seattleCenter.totalSalesDay + ' Cookies</li>');

  listArr.push('<li class="bold">Capitol Hill Sales</li>');
  for (i = 0; i < capitolHill.totalSalesByHour.length; i++) {
    listArr.push('<li>' + capitolHill.hours[i] + ': ' + capitolHill.totalSalesByHour[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + capitolHill.totalSalesDay + ' Cookies</li>');

  listArr.push('<li class="bold">Alki Sales</li>');
  for (i = 0; i < alki.totalSalesByHour.length; i++) {
    listArr.push('<li>' + alki.hours[i] + ': ' + alki.totalSalesByHour[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + alki.totalSalesDay + ' Cookies</li>');

  var fullList = listArr.join('');

  list.innerHTML = fullList;
  document.body.appendChild(list);
}

displaySales();
