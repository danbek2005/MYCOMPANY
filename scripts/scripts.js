menu.onclick = function(){
	var x = document.getElementsByClassName('main-menu')[0];

	if(x.className == 'main-menu'){
		x.className += ' opened';
	}else{
		x.className = 'main-menu';
	}
}