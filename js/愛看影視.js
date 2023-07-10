var rule={
            title: '愛看影視',
            host: 'https://ikan6.vip/',         //這個就是我們要抓得網址
            url:'https://ikan6.vip/vodshow/fyclass-----------.html',                 //根據下面內容無法翻頁所以fyclass，fyclass代表分類fypage代表分頁
            searchUrl: '/vodsearch/-------------/?wd=**',	  
	        //https://www.ygpvp.com/vodsearch/-------------.html?wd=023
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选, 0不啟用
  	        headers:{'User-Agent':'MOBILE_UA'},
            play_parse: true,
            lazy: '',
            limit: 6,  
	        推荐: '.public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
	        二级: {
                "title": "h3&&Text",
				//"desc": ".slide-info",
				"img": ".detail-pic&&data-original",//圖
				"content": ".check&&Text",//簡介
                "tabs": ".anthology-list-box&&ul&&li;a&&Text",
                "lists": ".anthology-list-box&&ul :eq(#id) li"
            },
	       搜索:'.flex-auto;.thumb-txt&&Text;*;*;.thumb-menu&&a&&href',
 }