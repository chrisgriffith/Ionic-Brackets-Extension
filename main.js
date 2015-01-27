$("#processReadMoreBtn").click( function (evt) {
	evt.stopImmediatePropagation();
	$("#processBtnDiv").toggle();
	$("#processDetails").toggle();
});

$("#closeProcessBtn").click( function (evt) {
	evt.stopImmediatePropagation();
	$("#processBtnDiv").toggle();
	$("#processDetails").toggle();
});

