// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (location.href != "https://www.xxxzhy.com/"){
		if (document.hidden) {
			//$('[rel="icon"]').attr('href', "/funny.ico");
			document.title = '/(ㄒoㄒ)/你弄丢了XXXZhy';
			clearTimeout(titleTime);
		}else {
			//$('[rel="icon"]').attr('href', "/favicon.ico");
			document.title = '(ฅ>ω<*ฅ) 噫又好啦~' + OriginTitle;
			titleTime = setTimeout(function () {
				document.title = OriginTitle;
			}, 2000);
		}
	}
    
});


