$('#tab-contents .tab[id != "tab1"]').hide();

// id="tab-menu"の"a"タグがクリックされたときに処理を実行
$("#tab-menu a").on("click",function(event){
  $("#tab-contents.tab").hide();
  $("#tab-menu.active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});