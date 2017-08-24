var stageCtx,wallCtx,grassCtx,tankCtx,overCtx;
var context = [stageCtx,wallCtx,grassCtx,tankCtx,overCtx];//画布


function game(){console.log(SCREEN_WIDTH);
	initScreen();

}

/**
 * [initScreen 初始化画布及页面]
 * @return {[type]} [description]
 */
function initScreen(){
	var canvas = $('#canvas-wrapper>canvas');
	canvas.forEach(function(element,index){
		context[index] = element.getContext('2d');
		element.style.width = SCREEN_WIDTH + 'px';
		element.style.height = SCREEN_HEIGHT + 'px';
	});
	var canvasWra = $('#canvas-wrapper');
	canvasWra.style.width = SCREEN_WIDTH + 'px';
	canvasWra.style.height = SCREEN_HEIGHT + 'px';
	canvasWra.style.backgroundColor = '#000';
}

/**
 * 获取dom节点
 * @param  {[string]} element [传入所需要的id.class.element]
 * @return {[dom]}         [description]
 */
function $(element){
	var result = document.querySelectorAll(element);
	if(result.length === 1){
		return result[0];
	}else{
		return result;
	}
}