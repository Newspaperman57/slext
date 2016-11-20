function loadModule(i, module_id) {
	if(localStorage[module_id] != "false") {

	}
}

for(var i = 0; i < modules.length; i++) {
	loadModule(i, modules[i].id);
}

var o = new core_module();
var t = new tabs_module(o);
var p = new persistence_module(o, t);
var c = new compile_main_module(o, t);
var s = new search_module(o);
var g = new goto_file_module(o);