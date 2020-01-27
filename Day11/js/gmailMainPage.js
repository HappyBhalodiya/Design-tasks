mdc.autoInit();

var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

// mdc.textField.MDCTextField.attachTo(document.querySelector('.name'));