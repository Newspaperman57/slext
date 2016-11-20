function injectJs(link) {
	var scr = document.createElement('script');
	scr.type="text/javascript";
	scr.src=link;
	document.getElementsByTagName('head')[0].appendChild(scr)
	//document.body.appendChild(scr);
}
var timer = setInterval(function() {
	if ($('div[ng-show="state.loading"]').hasClass("ng-hide")) {
		//run some other function 
		clearInterval(timer);
		
		/*var fragment = create('<div id="sl-loadscreen"><div id="sl-loadingicon">SLext is loading<br><i class="fa fa-cogs" aria-hidden="true"></i></div></div>');
		document.body.insertBefore(fragment, document.body.childNodes[0]);
		*/
		injectJs(chrome.extension.getURL('src/modules/core.module.js'));
		injectJs(chrome.extension.getURL('src/modules/tabs.module.js'));
		injectJs(chrome.extension.getURL('src/modules/search.module.js'));
		injectJs(chrome.extension.getURL('src/modules/persistence.module.js'));
		injectJs(chrome.extension.getURL('src/modules/compile_main.module.js'));
		injectJs(chrome.extension.getURL('src/modules/goto_file.module.js'));
		injectJs(chrome.extension.getURL('src/moduleConfig.js'));
		injectJs(chrome.extension.getURL('src/inject/modulemaster.js'));
	}
}, 1000);


function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
