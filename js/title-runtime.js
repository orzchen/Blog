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

function show_runtime() {
	window.setTimeout("show_runtime()", 1000);
	X = new Date("02/22/2020 22:22:22");
	Y = new Date();
	T = (Y.getTime() - X.getTime());
	M = 24 * 60 * 60 * 1000;
	a = T / M;
	A = Math.floor(a);
	b = (a - A) * 24;
	B = Math.floor(b);
	c = (b - B) * 60;
	C = Math.floor((b - B) * 60);
	D = Math.floor((c - C) * 60);
	runtime_span.innerHTML = "网站在各种灾难中运行了: " + A + "天" + B + "小时" + C + "分" + D + "秒"
}
show_runtime();