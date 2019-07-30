function castTwoInit(Vue) {
    var str = dataValue('user/great/common/castTwo.html')

    return {
        template: str,
        data: function () {
            return {
                imgs: [
                    {
                        imgSrc: '../../../image/bigWeigh/mianBan1.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/mianBan2.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/mianBan3.png'
                    },
                ]
            }
        },
        created: function () {

        },
        mounted: function () {
            //获得slider插件对象
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: true,
            });
        },
        methods: {
            returnBtnClick : function () {
                api.sendEvent({
                    name: 'returnBtnImg',
                    extra: {
                        key: 'castOne',
                    }
                });
            },
            castSixClick : function () {    // 农产品     第六个
                var that = this
                api.sendEvent({
                    name: 'six',
                    extra: {
                        key: 'castThree',
                    }
                });
            },
            castOneClick : function () {
                var that = this
                api.sendEvent({
                    name: 'one',
                    extra: {
                        key: 'castOneOne',
                    }
                });
            },
            facilClick : function () {
                openNewWindow("index", "facial/index.html");
            },
            togle : function () {
                toast("切换内容")
                window.location.reload()
            }
        }
    }
}
