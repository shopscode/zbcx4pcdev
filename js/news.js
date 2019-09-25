"use strict";function getArticleListHtml(t){var e="";return t.forEach(function(t){e+='<div class="blog-entry-text">\n              <h2 class="title">\n                <a href="./newsDetail.html?guid='+t.guid+'" target=_blank>'+t.title+'</a>\n              </h2>\n              <p class="meta">'+t.time+'</p>\n              <p class="desc">'+t.desc+"</p>\n            </div>"}),e}!function(){$.ajax({url:window.API_HOST+"?user.guide.getNews",contentType:"application./json; charset=utf-8",data:JSON.stringify({action:"user.guide.getNews"}),headers:{"Content-Type":"text/plain;charset=utf-8"},type:"post",dataType:"json"}).done(function(t){var e=t.data||{};localStorage.setItem("news",JSON.stringify(e));var n="";e.forEach(function(t){n+='<div class="intro-section">\n                    <div class="left-time">\n                      <div class="blog-entry-date">\n                        <div class="month">'+t.time+'</div>\n                      </div>\n                    </div>\n                    <div class="articles">'+getArticleListHtml(t.articleList)+"</div>\n                  </div>"}),$("#newsInfo").html(n)}).fail(function(){localStorage.setItem("news","")})}();