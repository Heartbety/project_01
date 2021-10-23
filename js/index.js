//效果一

(function() {
    var lis = document.querySelector('.header_nav').querySelectorAll('li')
    for (i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function() {
            for (i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            this.className = "active";
        }
        lis[i].onmouseout = function() {
            for (i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
        }
    }
}());
//效果二

(function() {
    //获取元素
    var lis = document.querySelector('.all-class').querySelector('.show').children;
    var hid = document.querySelectorAll('.men-hiden')
    for (i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        //绑定事件
        lis[i].onmouseover = function() {
            var index = this.getAttribute('index');
            for (i = 0; i < lis.length; i++) {
                hid[i].style.height = '';
            }
            hid[index].style.height = '385px';
        }
        lis[i].onmouseout = function() {
            for (i = 0; i < lis.length; i++) {
                hid[i].style.height = '';
            }
        }
    }
}());
//效果三
(function() {
    var lis = document.querySelector('.ui-sortable').children;
    var dot = document.querySelector('.b_dot').children;
    var ul = document.querySelector('#publish-copy');
    var num = 0;
    var timer = null;
    time();

    function time() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        timer = setInterval(function() {
            for (var i = 0; i < dot.length; i++) {
                dot[i].setAttribute('index', i);
                dot[i].addEventListener('click', function() {
                    for (var i = 0; i < dot.length; i++) {
                        dot[i].className = "";
                        lis[i].style.display = "none";
                        lis[i].style.zindex = "-1";
                    }
                    this.className = "on";
                    var index = this.getAttribute('index');
                    num = index;
                    lis[num].style.display = "block";
                    lis[num].style.zindex = "0";
                })
            }
            if (num < lis.length - 1) {
                num++;
            } else {
                num = 0;
            }
            dot[num].click();
        }, 1800)
    }
    ul.onmouseover = function() {
        clearInterval(timer);
        timer = null;
    }
    ul.onmouseout = function() {
        if (timer == null) {
            time();
        }
    }

}());
//效果四
(function() {
    var day = document.querySelector('#_d');
    var hour = document.querySelector('#_h');
    var minute = document.querySelector('#_m');
    var second = document.querySelector('#_s');
    var inputTime = +new Date('2022-10-17 00:00:00');
    countDown();
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var d = parseInt(times / 60 / 60 / 24 % 365)
        d = d < 10 ? '0' + d : d;
        day.innerHTML = d + '天';
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h + '时';
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m + '分';
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s + '秒';
    }
}())