/* Chenges here would affect default credentials. In case you want to create alternative credentials, please create a config.xml file to upload*/

var storeId = "store2";
var apiToken = "yesguy";
var checkoutId = "chktD3MM4tore2";





/* Please don't touch the following*/
document.getElementById('storeId').value = storeId;
document.getElementById('apiToken').value = apiToken;
document.getElementById('checkoutId').value = checkoutId;

document.getElementById('storeIdReceipt').innerHTML = storeId;
document.getElementById('apiTokenReceipt').innerHTML = apiToken;
document.getElementById('checkoutIdReceipt').innerHTML = checkoutId;

document.getElementById('myForm').reset();
