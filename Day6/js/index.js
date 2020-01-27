mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.remail'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.rpassword'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.rname'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.rphone'));

const dialog1=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.firstbtn'));
$('#b1').on('click',function(evt){
	
	dialog1.open();
})
$('#canclebtn').on('click',function(evt){
	
	dialog1.close();
})


 const dialog2=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.secondbtn'));
$('#b2').on('click',function(evt){
	
	dialog2.open();
})
$('#canclebtn1').on('click',function(evt){
	
	dialog2.close();
})



function getValue(){
var a = document.getElementById('name').value;
var b = document.getElementById('phone').value;
var c = document.getElementById('email').value;

console.log("Name " , a);
console.log("Password " , b);
console.log("phone " , c);
}





