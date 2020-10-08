var counterForBadge = 0;
var d = new Date();

function loadVariables() {
  hideBadgeCounter();
  document.getElementById('moreCallbacks').style.display = "none";
  document.getElementById('morePreload').style.display = "none";
  document.getElementById('moreReceipt').style.display = "none";
  document.getElementById('loaderPreload').style.display = "none";
  document.getElementById('loaderReceipt').style.display = "none";
  openPage('checkout', tabRed, '#6DC7BE')
}

// Get the modal
var callbackModal = document.getElementById("myCallbackModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  callbackModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  callbackModal.style.display = "none";
}

// Get the error modal
var errorModal = document.getElementById("myErrorModal");

// Get the <span> element that closes the modal
var spanError = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
spanError.onclick = function() {
  errorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == errorModal) {
    errorModal.style.display = "none";
  }

  if (event.target == callbackModal) {
    callbackModal.style.display = "none";
  }
}

function readSingleFile(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = function(f) {
      var contents = f.target.result;
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(contents,"text/xml");

      document.getElementById('storeId').value = xmlDoc.getElementsByTagName("storeId")[0].childNodes[0].nodeValue
      document.getElementById('apiToken').value = xmlDoc.getElementsByTagName("apiToken")[0].childNodes[0].nodeValue
      document.getElementById('checkoutId').value = xmlDoc.getElementsByTagName("checkoutId")[0].childNodes[0].nodeValue
      changeCheckoutValuesFunction()

      document.getElementById('myForm').reset();
    };
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

document.getElementById('myFile').addEventListener('change', readSingleFile, false);

document.getElementById('storeIdReceipt').innerHTML = document.getElementById('storeId').value;
document.getElementById('apiTokenReceipt').innerHTML = document.getElementById('apiToken').value;
document.getElementById('checkoutIdReceipt').innerHTML = document.getElementById('checkoutId').value;

function changePreloadRequest(){
  var str = document.getElementById("preloadRequestCode").value
  var n = str.indexOf(":");
  var n1 = str.indexOf('"', n);
  var n2 = str.indexOf('",', n1);
  var s1 = str.substring(n1+1, n2);
  str = str.replace(s1, document.getElementById('storeId').value)
  n = str.indexOf(":", n2);
  n1 = str.indexOf('"', n);
  n2 = str.indexOf('",', n1);
  s1 = str.substring(n1+1, n2);
  str = str.replace(s1, document.getElementById('apiToken').value)
  n = str.indexOf(":", n2);
  n1 = str.indexOf('"', n);
  n2 = str.indexOf('",', n1);
  s1 = str.substring(n1+1, n2);
  str = str.replace(s1, document.getElementById('checkoutId').value)
  document.getElementById("preloadRequestCode").value = str;
}

function changeCheckoutValuesFunction() {
  document.getElementById('storeIdReceipt').innerHTML = document.getElementById('storeId').value;
  document.getElementById('apiTokenReceipt').innerHTML = document.getElementById('apiToken').value;
  document.getElementById('checkoutIdReceipt').innerHTML = document.getElementById('checkoutId').value;

  changePreloadRequest()
  var x = document.getElementById('snackbar');
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "100%";
    }
  });
}

function openReference(evt,tabName) {
  var i, tabsimplecontent, tablinks;

  tabsimplecontent = document.getElementsByClassName("tabsimplecontent");
  for (i = 0; i < tabsimplecontent.length; i++) {
    tabsimplecontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;

  if (pageName == 'preload'){
    document.getElementById("preloadDefaultOpen").click();
  } else if (pageName == 'receipt') {
    document.getElementById("receiptDefaultOpen").click();
  }
}

function showObject(data) {
  var result = "";
  for (var p in data) {
      result += p + " , " + data[p] + "\n";
  }
  console.log(result);
}

function preloadRequestFunction(code){
  var request = new XMLHttpRequest()
  openPage('preload', tabGreen, '#6DC7BE')
  document.getElementById('loaderPreload').style.display = "block";
  document.getElementById('preloadSection').style.display = "none";

  request.open('POST', 'https://gatewayt.moneris.com/chkt/request/request.php')
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.onreadystatechange = function() {
    // Begin accessing JSON data here

    try {
      var data = JSON.parse(this.response)
      showObject(data);

      var codeJSON = JSON.stringify(this.response)
      codeJSON = codeJSON.replace(/"\\n|\\/g, '')
      codeJSON = codeJSON.replace(/}"/g, '}')

      var codeJSONFormatted = returnDataFormatted(codeJSON);
      var codeLinesPreload = '';
      if (request.status == 200 && request.readyState == 4) {
	       var count = (codeJSONFormatted.match(/<br/g) || []).length
	       var i;
	       for (i = 1; i <= count+1; i++) {
  	       codeLinesPreload += "<span>" + i + "</span>";
	       }
	       codeLinesPreload = codeLinesPreload.replace(/\[object HTMLSpanElement\]/,'')
	       codeLinesPreload = codeLinesPreload.replace(/\[object HTMLCollection\]/,'')
	       document.getElementById("codeLinesPreload").innerHTML = codeLinesPreload
	       document.getElementById("codePreload").innerHTML = codeJSONFormatted

         document.getElementById('loaderPreload').style.display = "none";
         document.getElementById('preloadSection').style.display = "inline";

         document.getElementById("ticketNumber").innerHTML = data.response.ticket
	       document.getElementById("ticketNumber1").innerHTML = data.response.ticket
	       document.getElementById("ticketNumber2").innerHTML = data.response.ticket
      }
    } catch (err) {
        if (request.readyState == 4) {
          document.getElementById("codeLinesPreload").innerHTML = ""
          document.getElementById("codePreload").innerHTML = "Unexpected end of JSON input";
          document.getElementById('loaderPreload').style.display = "none";
          document.getElementById('preloadSection').style.display = "inline";
          errorModal.style.display = "block";
        }
      }
    }

  request.send(code)
}

function receiptRequestFunction(storeId, apiToken, checkoutId, ticket) {
  openPage('receipt', tabBlue, '#6DC7BE')
  document.getElementById('loaderReceipt').style.display = "block";
  document.getElementById('receiptSection').style.display = "none";

  var requestCode = '{"store_id":"#STOREID#","api_token":"#APITOKEN#","checkout_id":"#CHECKOUTID#","ticket":"#TICKET#","environment":"qa","action":"receipt"}';
  requestCode = requestCode.replace(/#STOREID#/, storeId);
  requestCode = requestCode.replace(/#APITOKEN#/, apiToken);
  requestCode = requestCode.replace(/#CHECKOUTID#/, checkoutId);
  requestCode = requestCode.replace(/#TICKET#/, ticket);

  var request2 = new XMLHttpRequest()
  request2.open('POST', 'https://gatewayt.moneris.com/chkt/request/request.php')
  request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request2.onreadystatechange = function() {
    // Begin accessing JSON data here
    try {
      var data = JSON.parse(this.response)
      var codeJSON = JSON.stringify(this.response)
      codeJSON = codeJSON.replace(/"\\n|\\/g, '')
      codeJSON = codeJSON.replace(/}"/g, '}')

      var codeJSONFormatted = returnDataFormatted(codeJSON)
      var codeLinesReceipt = '';

      if (request2.status == 200 && request2.readyState == 4) {
	       var count = (codeJSONFormatted.match(/<br/g) || []).length
	       var i;
	       for (i = 1; i <= count+1; i++) {
  	       codeLinesReceipt += "<span>" + i + "</span>";
         }
         codeLinesReceipt = codeLinesReceipt.replace(/\[object HTMLSpanElement\]/,'')
         codeLinesReceipt = codeLinesReceipt.replace(/\[object HTMLCollection\]/,'')
         document.getElementById("codeLinesReceipt").innerHTML = codeLinesReceipt

         codeJSONFormatted = codeJSONFormatted.replace(/"response" :/,'<div class="tooltip">"response" :<span class="tooltiptext">Top level response object</span></div>')

         document.getElementById("codeReceipt").innerHTML = codeJSONFormatted

         document.getElementById('loaderReceipt').style.display = "none";
         document.getElementById('receiptSection').style.display = "inline";
       }
     } catch (err) {
        if (request2.readyState == 4) {
          document.getElementById("codeLinesReceipt").innerHTML = ""
          document.getElementById("codeReceipt").innerHTML = "Unexpected end of JSON input";
          document.getElementById('loaderReceipt').style.display = "none";
          document.getElementById('receiptSection').style.display = "inline";
          errorModal.style.display = "block";
        }
      }
    }
  request2.send(requestCode)
}

function returnDataFormatted(data) {
  var x;
  var dataFormatted = '';
  var count = '';

  for (x of data) {
    if (x == '{') {
      count += '&emsp;&emsp;';
      dataFormatted += '{<br />' + count;
    } else if (x == ',') {
      dataFormatted += ',<br />' + count;
    } else if (x == '}'){
      count = count.substring(0, count.length - 12);
      dataFormatted += '<br />' + count + '}';
    } else {
      dataFormatted += x;
    }
  }

  return dataFormatted;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function returnTimestamp() {
  var d = new Date();
  var timestamp = document.getElementById("demo");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return timestamp = h + ":" + m + ":" + s;
}

function readMoreLess(moreId, buttonId) {
  var more = document.getElementById(moreId);
  var btn = document.getElementById(buttonId);

  console.log(more)

  if (more.style.display === "none") {
    btn.innerHTML = "Read Less";
    btn.className = "less";
    more.style.display = "inline";
  } else {
    btn.innerHTML = "Read More";
    btn.className = "more";
    more.style.display = "none";
  }
}

function hideBadgeCounter() {
  counterForBadge = 0;
  document.getElementById('badgeCounter').style.display = "none";
}

function showBadgeCounter() {
  counterForBadge += 1;
  document.getElementById('badgeCounter').innerHTML = counterForBadge;
  document.getElementById('badgeCounter').style.display = "block";
}

function insertCallbackHTML(title, data) {
  var html_to_insert = '<p class="callback"><b>' + title + ':<span style="float: right;">' + returnTimestamp() + '</span></b><br>' + returnDataFormatted(data) + '</p>'
  document.getElementById('modalBody').insertAdjacentHTML('afterbegin', html_to_insert);
}
