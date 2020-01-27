// const chipSetEl = mdc.chipSetE1.MDCChipSet.attachTo(document.querySelector('.mdc-chip-set'));
//  const chipSetEl = document.querySelector('.mdc-chip-set');
// const chipSet = new MDCChipSet(chipSetEl);
// const chipSet1 = new MDCChipSet(chipSetEl);
// const chipSet2 = new MDCChipSet(chipSetEl);
// const chipSet3 = new MDCChipSet(chipSetEl);
// const chipSet4= new MDCChipSet(chipSetEl);

const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));

$('#menu').on('click',function(evt){
	menu.open = true;
	menu.open;
})

//const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

const snackbar1 =new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

$('#singleaction').on('click',function(evt){
	
	snackbar1.open();
})
 const snackbar2 =new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

$('#leading').on('click',function(evt){
	
	snackbar2.open();
})

 const snackbar3 =new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

$('#stacked').on('click',function(evt){
	
	snackbar3.open();
})








