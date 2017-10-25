'use strict';

function Store(name, minCust, maxCust, avgCookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookCust = avgCookCust;
  this.customersHour = [];
  this.totalSalesByHour = [];
  this.totalSalesDay = 0;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
};

Store.prototype.randomCookie = function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
};

Store.prototype.hourlySales = function() {
  var custHour;
  var cookiesHour;
  var cookiesDay = 0;
  for (var i = 0; i < this.hours.length; i++) {
    custHour = Math.floor(this.randomCookie());
    this.customersHour.push(custHour);
    cookiesHour = Math.floor(custHour * this.avgCookCust);
    this.totalSalesByHour.push(cookiesHour);
    cookiesDay += cookiesHour;
  };
  this.totalSalesDay = cookiesDay;
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.hourlySales();
seaTac.hourlySales();
seattleCenter.hourlySales();
capitolHill.hourlySales();
alki.hourlySales();

var stores = [];
stores.push(firstAndPike);
stores.push(seaTac);
stores.push(seattleCenter);
stores.push(capitolHill);
stores.push(alki);

function drawSalesTable() {
  var j = 0;
  var store = stores[j];
  var tHeader = document.getElementById('table_cookie_header');
  var tHeaderRow = document.createElement('tr');
  var tHeaderData = document.createElement('td');
  tHeaderData.innerHTML = '';
  tHeaderRow.appendChild(tHeaderData);
  for (var i = 0; i < store.hours.length; i++) {
    tHeaderData = document.createElement('td');
    tHeaderData.innerHTML = store.hours[i];
    tHeaderRow.appendChild(tHeaderData);
  }
  tHeaderData = document.createElement('td');
  tHeaderData.innerHTML = 'Daily Location Total';
  tHeaderRow.appendChild(tHeaderData);
  tHeader.appendChild(tHeaderRow);
  var tBody = document.getElementById('table_cookie_content');
  var tRow;
  var tData;
  for (j = 0; j < stores.length; j++) {
    store = stores[j];
    tRow = document.createElement('tr');
    tData = document.createElement('td');
    tData.innerHTML = store.name;
    tRow.appendChild(tData);
    for (var k = 0; k < store.hours.length; k++) {
      tData = document.createElement('td');
      tData.innerHTML = store.totalSalesByHour[k];
      tRow.appendChild(tData);
    }
    tData = document.createElement('td');
    tData.innerHTML = store.totalSalesDay;
    tRow.appendChild(tData);
    tBody.appendChild(tRow);
  }
  var allStoresHour = 0;
  var tFooter = document.getElementById('table_cookie_footer');
  var tFooterRow = document.createElement('tr');
  var tFooterData = document.createElement('td');
  tFooterData.innerHTML = 'Totals:';
  tFooterRow.appendChild(tFooterData);
  for (var l = 0; l < store.hours.length; l++) {
    tFooterData = document.createElement('td');
    for (var m = 0; m < stores.length; m++) {
      allStoresHour += stores[m].totalSalesByHour[l];
    }
    tFooterData.innerHTML = allStoresHour;
    allStoresHour = 0;
    tFooterRow.appendChild(tFooterData);
  }
  tFooter.appendChild(tFooterRow);
}

drawSalesTable();

function drawStaffTable() {
  var j = 0;
  var store = stores[j];
  var tHeader = document.getElementById('table_staff_header');
  var tHeaderRow = document.createElement('tr');
  var tHeaderData = document.createElement('td');
  tHeaderData.innerHTML = '';
  tHeaderRow.appendChild(tHeaderData);
  for (var i = 0; i < store.hours.length; i++) {
    tHeaderData = document.createElement('td');
    tHeaderData.innerHTML = store.hours[i];
    tHeaderRow.appendChild(tHeaderData);
  }
  tHeader.appendChild(tHeaderRow);
  var tBody = document.getElementById('table_staff_content');
  var tRow;
  var tData;
  var staffNeeded = 0;
  for (j = 0; j < stores.length; j++) {
    store = stores[j];
    tRow = document.createElement('tr');
    tData = document.createElement('td');
    tData.innerHTML = store.name;
    tRow.appendChild(tData);
    for (var k = 0; k < store.hours.length; k++) {
      staffNeeded = Math.ceil(store.customersHour[k] / 20);
      if (staffNeeded < 2) {
        staffNeeded++;
      }
      tData = document.createElement('td');
      tData.innerHTML = staffNeeded;
      tRow.appendChild(tData);
    }
    tBody.appendChild(tRow);
  }
}

drawStaffTable();
