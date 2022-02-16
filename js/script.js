$("#cow").mouseenter(function(){
        $("<audio></audio>").attr({
                'src':'./audio/cow-sound.mp3',
                'volume':1,
                'autoplay':'autoplay'
        }).appendTo("body");
});
