'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookCust: 6.3,
  totalSalesDay: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCookie: function() {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
  },
  hourlySales: function() {
    var cookiesHour;
    var cookiesDay = 0;
    for (var i = 0; i < firstAndPike.hours.length; i++) {
      cookiesHour = this.randomCookie();
      console.log(firstAndPike.hours[i] + ':', cookiesHour + ' Cookies');
      this.totalSalesDay.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
      console.log('Cookies Cycle: ' + cookiesDay);
    };
    console.log('Total Cookies Sold: ' + cookiesDay);
    return cookiesDay;
  },
};

firstAndPike.hourlySales();
console.log('Sales Each Hour: ' + firstAndPike.totalSalesDay);

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookCust: 1.2,
  totalSalesDay: [],
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
      this.totalSalesDay.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Cookies Sold: ' + cookiesDay);
    return cookiesDay;
  },
};

seaTac.hourlySales();
console.log('Sales Each Hour: ' + seaTac.totalSalesDay);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookCust: 3.7,
  totalSalesDay: [],
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
      this.totalSalesDay.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Cookies Sold: ' + cookiesDay);
    return cookiesDay;
  },
};

seattleCenter.hourlySales();
console.log('Sales Each Hour: ' + seattleCenter.totalSalesDay);

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookCust: 2.3,
  totalSalesDay: [],
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
      this.totalSalesDay.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Cookies Sold: ' + cookiesDay);
    return cookiesDay;
  },
};

capitolHill.hourlySales();
console.log('Sales Each Hour: ' + capitolHill.totalSalesDay);

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookCust: 4.6,
  totalSalesDay: [],
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
      this.totalSalesDay.push(cookiesHour);
      cookiesDay = cookiesHour + cookiesDay;
    };
    console.log('Total Cookies Sold: ' + cookiesDay);
    return cookiesDay;
  },
};

alki.hourlySales();
console.log('Sales Each Hour: ' + alki.totalSalesDay);

function displaySales() {
  var list = document.createElement('ul');
  var listArr = [];

  listArr.push('<li class="bold">1st and Pike Sales</li>');
  for (var i = 0; i < firstAndPike.totalSalesDay.length; i++) {
    listArr.push('<li>' + firstAndPike.hours[i] + ': ' + firstAndPike.totalSalesDay[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + firstAndPike.hourlySales() + ' Cookies</li>');

  listArr.push('<li class="bold">SeaTac Airport Sales</li>');
  for (i = 0; i < seaTac.totalSalesDay.length; i++) {
    listArr.push('<li>' + seaTac.hours[i] + ': ' + seaTac.totalSalesDay[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + seaTac.hourlySales() + ' Cookies</li>');

  listArr.push('<li class="bold">Seattle Center Sales</li>');
  for (i = 0; i < seattleCenter.totalSalesDay.length; i++) {
    listArr.push('<li>' + seattleCenter.hours[i] + ': ' + seattleCenter.totalSalesDay[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + seattleCenter.hourlySales() + ' Cookies</li>');

  listArr.push('<li class="bold">Capitol Hill Sales</li>');
  for (i = 0; i < capitolHill.totalSalesDay.length; i++) {
    listArr.push('<li>' + capitolHill.hours[i] + ': ' + capitolHill.totalSalesDay[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + capitolHill.hourlySales() + ' Cookies</li>');

  listArr.push('<li class="bold">Alki Sales</li>');
  for (i = 0; i < alki.totalSalesDay.length; i++) {
    listArr.push('<li>' + alki.hours[i] + ': ' + alki.totalSalesDay[i] + ' Cookies</li>');
  }
  listArr.push('<li>Total for Day: ' + alki.hourlySales() + ' Cookies</li>');

  var fullList = listArr.join('');

  list.innerHTML = fullList;
  document.body.appendChild(list);
}

// call our domStuff function
displaySales();
