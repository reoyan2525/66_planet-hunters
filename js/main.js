
$(function () {
    var loading = $("#js-loading");

    //ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
    $(window).on("load", function () {
        var windowHeight = $(window).height();
        $(".mv").height(windowHeight);
        loading.delay("1000").fadeOut("2000");
    });

    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function () {
        loading.fadeOut("3000");
    }, 8000);



    //画面のリサイズ時にmvの高さをveiwに合わせる処理
    $(window).resize(function () {
        var windowsHeight = $(windows).height();
        $('mv-inner').height(windowsHeight);
    });

    // サウンド再生と停止処理
    var $audioPlayButton = $('#js-audio-play');
    var $audioElement = $('.js-audio');
    var $audioSwitchText = $('.audio-switch-txt');
    var $audioSwitchIcon = $('.audio-switch-icon');

    // 初期状態の設定(停止中)
    var isAudioPlaying = false;

    $audioPlayButton.on('click', function () {
        if (isAudioPlaying) {
            // 音声を停止し、テキストとアイコンを初期状態に戻す
            $audioElement[0].pause();
            $audioElement[0].currentTime = 0;
            $audioSwitchText.html('SOUND OFF');
            $audioSwitchIcon.html('volume_off');
        } else {
            // 音声を再生し、テキストとアイコンを変更
            $audioElement[0].play();
            $audioSwitchText.html('SOUND ON');
            $audioSwitchIcon.html('volume_up');
        }
        // プレイ状態の有無を変更する
        isAudioPlaying = !isAudioPlaying;
    });

    // ページ内リンクのみ取得してTOPに戻るスクロール処理
    // a要素に#で始まるリンクが設定されている所がトリガー
    $('a[href^="#"]').on("click", function () {
        //デフォルトのイベントをキャンセル
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000); // 1000msでページの一番上にスクロール
    });


    //SP用のCTAボタンの表示
    if ($(window).width() <= 768) {
        $spBTN = $(".footer-btnArea");
        $spBTN.hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $spBTN.fadeIn();
            }
            else {
                $spBTN.fadeOut();
            }
        });

        $spBTN.on('click', function () {
            $('html,body').animate({ scrollTop: 0 });
        });
    }

});
