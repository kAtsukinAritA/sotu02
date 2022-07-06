
/*②IMG要素を全てセレクト*/
document.querySelectorAll("img").forEach((imgElm) => {
  /*③要素のクリックイベントにイベントリスナーを紐づける*/
  imgElm.addEventListener('click', ".modal-open");
})

 //モーダル表示
 $(".modal-open").modaal({
    //start_open:flag, // ページロード時に表示するか
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
      $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
      $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
    });