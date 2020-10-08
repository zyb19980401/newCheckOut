var myCheckout = new monerisCheckout()

myCheckout.setMode("qa")
myCheckout.setCheckoutDiv("monerisCheckout")

myCheckout.setCallback("page_loaded", myPageLoad);
myCheckout.setCallback("cancel_transaction", myCancelTransaction);
myCheckout.setCallback("error_event", myErrorEvent);
myCheckout.setCallback("payment_receipt", myPaymentReceipt);
myCheckout.setCallback("payment_complete", myPaymentComplete);

function displayCheckoutFunction(ticket) {
  hideBadgeCounter()
  myCheckout.startCheckout(ticket);
  openPage('checkout', tabRed, '#6DC7BE')
}

function terminateInstanceFunction(ticket) {
  openPage('checkout', tabRed, '#6DC7BE')
  myCheckout.closeCheckout(ticket);
  document.getElementById('monerisCheckout').innerHTML = '<br><br><br><br><h1>You have end the whole process successfully!</h1>'
}

function myPageLoad(data) {
  document.getElementById('modalBody').innerHTML = "";
  insertCallbackHTML("Page Loaded", data)
  showBadgeCounter()
}

function myCancelTransaction(data) {
  insertCallbackHTML("Transaction Cancelled", data)
  showBadgeCounter()
}

function myErrorEvent(data) {
  insertCallbackHTML("Error", data)
  showBadgeCounter()
}

function myPaymentReceipt(data) {
  insertCallbackHTML("Payment receipt", data)
  showBadgeCounter()
}

function myPaymentComplete(data) {
  insertCallbackHTML("Payment Completed", data)
  showBadgeCounter()
}
