var rule={
            title: '櫻花動漫',
            host: 'http://www.dm99.me',
            url: '/list/fypage.html',
            searchUrl:'/search.asp?searchword=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
  	    headers:{'User-Agent':'MOBILE_UA'},
            
	    class_parse: '.row&&ul&&li&&li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.myui-vodlist clearfix;.myui-vodlist__box&&.myui-vodlist__detail;a&&title;.myui-vodlist__box&&a&&data-original;.myui-vodlist__box&&a&&pic-text text-right&&Text;myui-vodlist__detail&&a&&href',
            double: true, // 推荐内容是否双层定位
 }