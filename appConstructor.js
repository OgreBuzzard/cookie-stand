'use strict';

function Store(name, minCust, maxCust, avgCookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookCust = avgCookCust;
  this.totalSalesByHour = [];
  this.totalSalesDay = 0;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
};

Store.prototype.randomCookie = function() {
  return Math.floor(((Math.random() * (this.maxCust - this.minCust)) + this.minCust) * this.avgCookCust);
};

Store.prototype.hourlySales = function() {
  var cookiesHour;
  var cookiesDay = 0;
  for (var i = 0; i < this.hours.length; i++) {
    cookiesHour = this.randomCookie();
    console.log(this.hours[i] + ':', cookiesHour + ' Cookies');
    this.totalSalesByHour.push(cookiesHour);
    cookiesDay = cookiesHour + cookiesDay;
  };
  console.log('Total: ' + cookiesDay);
  if (i = this.hours.length) {
    this.totalSalesDay = cookiesDay;
  }
  return cookiesDay;
};

var tableHeader = document.getElementById('table_header');
var tableHeaderRow;
var tableHeaderData;
var tableBody = document.getElementById('table_content');
var tableRow;
var tableData;
var tableFooter = document.getElementById('table_footer');
var tableFooterRow;
var tableFooterData;
var stores = [];

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

stores.push(firstAndPike);
stores.push(seaTac);
stores.push(seattleCenter);
stores.push(capitolHill);
stores.push(alki);

function drawTable() {
  tableHeaderRow = document.createElement('tr');
  tableHeaderData = document.createElement('td');
  tableHeaderData.innerHTML = '';
  tableHeaderRow.appendChild(tableHeaderData);
  // for (var i = 0; i < store.hours.length; i++) {
  //   tableHeaderData = document.createElement('td');
  //   tableHeaderData.innerHTML = store.hours[i];
  //   tableHeaderRow.appendChild(tableHeaderData);
  // }
  tableHeader.appendChild(tableHeaderRow);
  for (var j = 0; j < stores.length; j++) {
    var store = stores[j];
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerHTML = store.name;
    tableRow.appendChild(tableData);
    for (var i = 0; i < store.hours.length; i++) {
      tableData = document.createElement('td');
      tableData.innerHTML = store.totalSalesByHour[i];
      tableRow.appendChild(tableData);
    }
    tableData = document.createElement('td');
    tableData.innerHTML = store.totalSalesDay;
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
  }
  var allStoresHour = 0;
  tableFooterRow = document.createElement('tr');
  tableFooterData = document.createElement('td');
  tableFooterData.innerHTML = 'Totals:';
  tableFooterRow.appendChild(tableFooterData);
  for (i = 0; i < store.hours.length; i++) {
    tableFooterData = document.createElement('td');
    for (j = 0; j < stores.length; j++) {
      allStoresHour += stores[j].totalSalesByHour[i];
    }
    tableFooterData.innerHTML = allStoresHour;
    allStoresHour = 0;
    tableFooterRow.appendChild(tableFooterData);
  }
  tableFooter.appendChild(tableFooterRow);
}

drawTable();
