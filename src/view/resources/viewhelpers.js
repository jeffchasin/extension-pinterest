'use strict';

/*
 * add event data form fields to each action view
 */

function getEventForm(cbk) {
  var eventForm = 'eventdata.html';
  var contentDiv = document.getElementById('content');
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      contentDiv.innerHTML = xmlHttp.responseText;
    }
    cbk();
  };
  xmlHttp.open('GET', eventForm, true);
  xmlHttp.send(null);
}

/*
 * Select DE icon divs,
 * convert nodelist to array,
 * add click event listener,
 * trigger openDataElementSelector & populate field
 * with DE name
 */

function deStuff() {
  var divNodes = document.querySelectorAll('div.fa-i');

  divNodes.forEach(function(el) {
    el.addEventListener('click', function(e) {
      window.extensionBridge.openDataElementSelector(function(dataElement) {
        var deName = e.target.parentElement.dataset.de;
        var theInp = document.getElementById(deName);
        theInp.value += dataElement;
      });
    });
  });
}
