mdc.autoInit();

var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});


const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
// const menuSurface = new mdc.menuSurface.MDCMenu(document.querySelector('.mdc-menu-surface'));
$('#menu').on('click',function(evt){
	// menuSurface.setAbsolutePosition(100, 100);
	menu.open = true;
	menu.open;
})


mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
const dialog1=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.firstbtn'));
$('#b1').on('click',function(evt){
	
	dialog1.open();
})
$('#canclebtn').on('click',function(evt){
	
	dialog1.close();
})



const snackbar = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
$('#save').on('click',function(evt){
	snackbar.open();
})

mdc.textField.MDCTextField.attachTo(document.querySelector('.name'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.address'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.phone'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.remail'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.rpassword'));