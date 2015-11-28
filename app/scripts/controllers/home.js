angular.module('animationApp').controller('HomeCtrl', function($scope,$location,$timeout,$rootScope){
  
    // animation method
    $scope.startAnimation = function(){
    var animPlaying = 0; // which one is playing
    var numAnis = 4; // total number of animations
    var tl1=new TimelineLite({paused: true, onComplete: function(){ TweenMax.delayedCall(3, nextAnimation);}});
    var tl2=new TimelineLite({paused: true, onComplete: function(){ TweenMax.delayedCall(3, nextAnimation);}});
    var tl3=new TimelineLite({paused: true, onComplete: function(){ TweenMax.delayedCall(3, nextAnimation);}});
    var tl4=new TimelineLite({paused: true, onComplete: function(){ TweenMax.delayedCall(3, nextAnimation);}});
    var sF=1; // scaleFactor for responsivevess & recalculating positions and sizes

    function startAnimation() {
        TweenMax.to("#animStage-0", .5, {autoAlpha: 0, delay: 5});
        TweenMax.to("#animStage-1", .5, {autoAlpha: 1, delay: 5.5});
        TweenMax.delayedCall(2.5, nextAnimation);
    }

    function nextAnimation() { // fade animations out & in and start next animation
        var showAni = animPlaying+1;
        TweenMax.to("#animStage-"+animPlaying, .5, {autoAlpha: 0});
        TweenMax.to("#animStage-"+showAni, .5, {autoAlpha: 1, delay: .5});
        animPlaying = showAni;
        if(animPlaying <= numAnis) {
            eval("tl"+showAni+".seek(0)");
            eval("tl"+showAni+".play()");
        }
    }

    function zoomTxt() { // zooms text on stage #4
        TweenMax.to("#animStage-4 #txt-scares", .6, {scaleX: 1, scaleY: 1, ease:Power2.easeOut, yoyo: true, repeat: 5});
        TweenMax.to("#animStage-4 #txt-that", .6, {x: "-="+(100*sF), ease:Power2.easeOut, yoyo: true, repeat: 5});
        TweenMax.to("#animStage-4 #txt-you", .6, {x: "+="+(100*sF), ease:Power2.easeOut, yoyo: true, repeat: 5});
    }

    $scope.initiateAnimation = function(){ // initiate all animations
        // Setup Animation #1
        tl1.set(("#animStage-1 #txt-is-the, #animStage-1 #txt-risk, #animStage-1 #txt-of, #animStage-1 #txt-doing, #animStage-1 #txt-nothing-1, #animStage-1 #txt-nothing-2"),{y: "+="+(600*sF), autoAlpha:1});
        // Animation #1
        tl1.to("#animStage-1 #txt-of", .5, {onComplete: function() {
            TweenMax.to("#animStage-1 #txt-avoid", 1.2, {x: 225*sF, yoyo: true, repeat: -1, delay: .3, ease:Power1.easeInOut});
            TweenMax.to("#animStage-1 #txt-avoid", 1.2, {x: -225*sF, yoyo: true, repeat: -1, delay: 1.5, ease:Power1.easeInOut});
        }});
        tl1.staggerTo("#animStage-1 #icon-warning, #animStage-1 #icon-fire, #animStage-1 #icon-stock-crash, #animStage-1 #icon-storm, #animStage-1 #icon-virus", 2.5, {y: (-1100*sF)+"px", ease:SlowMo.ease.config(0.7, 0.4, false), delay: .5}, 1.25);
        tl1.staggerTo("#animStage-1 #txt-only-risk, #animStage-1 #txt-avoid", 1.2, {y: -600*sF, ease:Power2.easeIn}, .2, "-="+(1.2*sF));
        tl1.to("#animStage-1 #txt-is-the, #animStage-1 #txt-risk, #animStage-1 #txt-of, #animStage-1 #txt-doing, #animStage-1 #txt-nothing-1, #animStage-1 #txt-nothing-2", 1, {y: 0, ease: Power2.easeOut, onComplete:function(){
            TweenMax.killTweensOf("#animStage-1 #txt-avoid");
        }},"-="+(.5*sF));
        tl1.to("#animStage-1 #icon-do-nothing", 3.5, {y: (-1100*sF)+"px", ease:SlowMo.ease.config(0.7, 0.4, false)}, "dodge");
        tl1.to("#animStage-1 #txt-nothing-1", .5, {x: "-="+(120*sF)}, "dodge+=.1");
        tl1.to("#animStage-1 #txt-nothing-2", .5, {x: "+="+(120*sF)}, "dodge+=.1");
        tl1.to("#animStage-1 #txt-nothing-1", .5, {x: 0}, "dodge+=1.7");
        tl1.to("#animStage-1 #txt-nothing-2", .5, {x: 0}, "dodge+=1.7");
        tl1.to("#animStage-1 #txt-of", .5, {x: "-="+(30*sF)}, "dodge+=.4");
        tl1.to("#animStage-1 #txt-doing", .5, {x: "+="+(170*sF)}, "dodge+=.4");
        tl1.to("#animStage-1 #txt-of", .5, {x: 0}, "dodge+=2.3");
        tl1.to("#animStage-1 #txt-doing", .5, {x: 0}, "dodge+=2.3");
        tl1.to("#animStage-1 #txt-is-the", .5, {x: "-="+(200*sF)}, "dodge+=1.1");
        tl1.to("#animStage-1 #txt-risk", .5, {x: "+="+(20*sF)}, "dodge+=1.1");
        tl1.to("#animStage-1 #txt-is-the", .5, {x: 0}, "dodge+=2.9");
        tl1.to("#animStage-1 #txt-risk", .5, {x: 0}, "dodge+=2.9");
        

        // Setup Animation #2
        tl2.set("#animStage-2 #icon-pyramides, #animStage-2 #icon-sphinx", {x: -500*sF});
        tl2.set("#animStage-2 #icon-sphinx", {alpha: .6});
        tl2.set("#animStage-2 #icon-pyramides", {alpha: .5});
        tl2.set("#animStage-2 #icon-waves", {alpha: .4});
        tl2.set("#animStage-2 #txt-safe", {y: "-="+(200*sF)});
        tl2.set("#animStage-2 #txt-but, #animStage-2 #txt-not, #animStage-2 #txt-what-ships, #animStage-2 #txt-built-for", {x: -800*sF, autoAlpha: 1})
        tl2.set("#animStage-2 #icon-anchor", {autoAlpha: .5, scaleX:.01, scaleY:.01, x:225*sF, y:15*sF});

        // Animation #2
        tl2.to("#animStage-2 #txt-safe", 1, {});
        tl2.to("#animStage-2 #txt-safe", .5 ,{css:{clip:"rect(0px,97px,319px,0px)", top: (474*sF)+"px"}, ease:Power1.easeOut}, "anchor");
        tl2.to("#animStage-2 #icon-anchor", .5 ,{y: "+="+(170*sF), scaleX: .2, scaleY: .2, ease:Power1.easeOut}, "anchor");
        tl2.to("#animStage-2 #txt-safe", .5, {});

        tl2.to("#animStage-2 #icon-anchor", .5 ,{x: "-="+(450*sF), y: "-="+(30*sF), rotation: 50, scaleX: .6, scaleY: .6, ease:Power1.easeOut}, "anchorout1");
        tl2.to("#animStage-2 #txt-harbour", .5, {x: "-="+(350*sF), y: "+="+(250*sF), rotation: 40, ease: Power2.easeOut}, "anchorout1+=.1");
        tl2.to("#animStage-2 #txt-the", .5, {x: "-="+(350*sF), y: "-="+(150*sF), rotation: 40, ease: Power2.easeOut}, "anchorout1+=.2");
        tl2.to("#animStage-2 #icon-ship-front", .5, {rotation: 10, ease: Power2.easeOut}, "anchorout1+=.1");

        tl2.to("#animStage-2 #icon-anchor", .7 ,{x: "+="+(750*sF), y: "-="+(300*sF), rotation: -60, scaleX: 1, scaleY: 1, ease:Power1.easeInOut}, "anchorout2-=.2");
        tl2.to("#animStage-2 #txt-safe", .5, {x: "+="+(350*sF), y: "-="+(250*sF), rotation: -60, ease: Power2.easeOut}, "anchorout2+=.15");
        tl2.to("#animStage-2 #txt-a-ship", .5, {x: "-="+(100*sF), y: "-="+(700*sF), rotation: -40, ease: Power2.easeOut}, "anchorout2+=.15");
        tl2.to("#animStage-2 #icon-ship-front", .5, {x: "+="+(600*sF), y: "-="+(300*sF), rotation: -30, ease: Power2.easeOut}, "anchorout2+=.1");

        tl2.to("#animStage-2 #icon-anchor", .7 ,{x: "-="+(950*sF), y: "-="+(300*sF), rotation: 70, ease:Power1.easeInOut}, "anchorout3");

        tl2.to("#animStage-2 #icon-waves", 1, {x: "+="+(850*sF)}, "enterShip");
        tl2.staggerTo("#animStage-2 #icon-pyramides, #animStage-2 #icon-sphinx", 1, {x: 0}, .2, "enterShip+=.3");

        tl2.to("#animStage-2 #icon-ship-side", 3, {x: "+="+(950*sF), ease:Power2.easeOut}, "enterShip+=.5");
        tl2.to("#animStage-2 #txt-what-ships", 2, {x: "+="+(900*sF), ease:Power1.easeOut}, "enterShip+=.5");
        tl2.to("#animStage-2 #txt-but", .7, {x: "+="+(800*sF), ease:Power2.easeOut}, "enterShip+=.7");
        tl2.to("#animStage-2 #txt-not", .8, {x: "+="+(800*sF), ease:Power2.easeOut}, "enterShip+=.9");
        tl2.to("#animStage-2 #txt-built-for", .8, {x: "+="+(800*sF), ease:Power2.easeOut}, "enterShip+=2");

        // Setup Animation #3
        tl3.set("#animStage-3 #txt-travel-often, #animStage-3 #txt-getting-lost, #animStage-3 #dot, #animStage-3 #icon-persona", {scaleX: 0, scaleY: 0});
        tl3.set("#animStage-3 #arrows", {scaleX: .5, scaleY: .5});
        tl3.set("#animStage-3 #txt-travel-often", {transformOrigin: "20% 50%"});
        tl3.set("#animStage-3 #txt-getting-lost", {transformOrigin: "80% 50%"});
        tl3.set("#animStage-3 #arrow-ani-1", {rotation: 30});
        tl3.set("#animStage-3 #arrow-ani-2", {rotation: 120});
        tl3.set("#animStage-3 #arrow-ani-3", {rotation: 210});
        tl3.set("#animStage-3 #arrow-ani-4", {rotation: 300});
        // tl3.set("#animStage-3 #arrow-ani-5", {rotation: 160});
        tl3.set("#animStage-3 #txt-yourself", {rotationX: -90});
        tl3.set("#animStage-3 #map-zoom", {autoAlpha: 0, scaleX: .7, scaleY: .7, rotation: 90, transformOrigin: "-50% -50%"});
        tl3.set("#animStage-3 #map", {transformPerspective: 1400});

        // Animation #3 / Part 1 - Travel Often
        tl3.to("#animStage-3 #map", 1, {onComplete: function() {
            // tl3.set("#animStage-3 #arrows", {autoAlpha: 1});
            TweenMax.to("#animStage-3 #dot", 1, {autoAlpha: 1, scaleX: .5, scaleY: .5, repeat: -1, yoyo: true, ease: Power2.easeOut});
            TweenMax.to("#animStage-3 #arrows", 8, {rotation: 360, repeat: -1, ease: Power1.easeIn});
        }});
        tl3.to("#animStage-3 #arrows", 4, {scaleX: 1, scaleY: 1, ease: Power2.easeIn}, "txt1");
        tl3.to("#animStage-3 #txt-travel-often", 1, {scaleX: 1, scaleY: 1, x: "+="+(300*sF), ease: Power2.easeOut}, "txt1");
        tl3.to("#animStage-3 #txt-travel-often", 2.5, {x: "+="+(250*sF), y: "-="+(250*sF), ease: Power1.easeInOut}, "txt1");
        tl3.to("#animStage-3 #txt-travel-often", 1, {scaleX: 0, scaleY: 0, ease: Power2.easeIn}, "txt1+=2");
        tl3.to("#animStage-3 #txt-getting-lost", 1, {scaleX: 1, scaleY: 1, x: "-="+(300*sF), ease: Power2.easeOut}, "txt1+=1");
        tl3.to("#animStage-3 #txt-getting-lost", 2.5, {x: "-="+(100*sF), y: "-="+(250*sF), ease: Power1.easeInOut}, "txt1+=1");
        // Animation #3 / Part 2 - Vertigo
        tl3.to("#animStage-3 #arrows", .5, {autoAlpha: 0, onComplete: function(){
            TweenMax.killTweensOf("#animStage-3 #dot, #animStage-3 #arrows");
        }}, "vertigo");
        tl3.to("#animStage-3 #txt-getting-lost", 2.5, {x: "+="+(15*sF), rotation: 720, transformOrigin: "50% 50%", ease:Power1.easeInOut}, "vertigo");
        tl3.to("#animStage-3 #txt-getting-lost", 1, {y: "+="+(200*sF), yoyo: true, repeat: 1, ease:Power1.easeInOut}, "vertigo");
        tl3.to("#animStage-3 #map", 3.5, {rotation: -360, scaleX: 90, scaleY: 90, x: "-="+(329*sF), y: "+="+(31*sF), ease:Power2.easeInOut}, "vertigo");
        tl3.to("#animStage-3 #map", .5, {alpha: 0, ease:Power1.easeOut}, "vertigo+=3");
        tl3.to("#animStage-3 #map-zoom", 3.2, {rotation: -360, scaleX: 1, scaleY: 1, ease:Power2.easeInOut}, "vertigo");
        tl3.to("#animStage-3 #map-zoom", 1.5, {autoAlpha: 1, ease:Power2.easeInOut}, "vertigo+=2");
        tl3.to("#animStage-3 #txt-help-discover", 1, {y: "-="+(440*sF), ease: Power2.easeOut}, "-="+(1.5*sF));
        tl3.to("#animStage-3 #map", .5, {});

        // Animation #3 / Part 3 - Help you discover yourself
        tl3.set("#animStage-3 #txt-getting-lost, #animStage-3 #txt-help-discover, #animStage-3 #txt-yourself", {transformPerspective: 1400, transformOrigin: "50% -300%"});
        tl3.set("#animStage-3 #icon-persona", {transformOrigin: "50% 20%", rotationX: 90, scaleX: 0.3, scaleY: 0.3});
        tl3.set("#animStage-3 #map-zoom", {transformOrigin: "50% 20%"});
        tl3.set("#animStage-3 #map", {transformOrigin: "50% 0%"});
        tl3.to("#animStage-3 #txt-getting-lost, #animStage-3 #txt-help-discover", 1, {y: "-="+(200*sF), rotationX: 90, ease: Power1.easeIn}, "rotateIn");
        tl3.to("#animStage-3 #txt-yourself", 1, {y: "-="+(580*sF), rotationX: 0, ease: Power1.easeIn}, "rotateIn");
        tl3.to("#animStage-3 #icon-persona", 1, {y: "-="+(350*sF), rotationX: 0, scaleX: 1, scaleY: 1, ease: Power1.easeIn}, "rotateIn");
        tl3.to("#animStage-3 #map", 1, {rotationX: 85, scaleX: 10, scaleY: 10, z:-3500,  ease: Power1.easeIn}, "rotateIn");
        tl3.to("#animStage-3 #map-zoom", 1, {rotationX: 90, y: "-="+(150*sF), ease: Power1.easeIn}, "rotateIn");

        // Setup Animation #4
        tl4.set("#animStage-4 #icon-map",{autoAlpha:1});
        tl4.set("#animStage-4 .icon", {transformPerspective: 1400, transformOrigin: "50% 0%"});
        tl4.set("#animStage-4 #txt-that, #animStage-4 #txt-you", {scaleX: 0, scaleY: 0, autoAlpha: 1});
        tl4.set("#animStage-4 #txt-scares", {scaleX: 0, scaleY: 0, autoAlpha: 1});

        // Animation #4
        tl4.to("#animStage-4 #icon-map", 1, {});
        tl4.set("#animStage-4 #icon-map .check", {autoAlpha: 1});
        tl4.to("#animStage-4 #icon-map", .5, {rotationX: 90, ease:Power2.easeIn});
        
        tl4.to("#animStage-4 #txt-that, #animStage-4 #txt-you", .6, {scaleX: 1, scaleY: 1, ease:Power2.easeIn},"txt1");
        tl4.to("#animStage-4 #txt-scares", .6, {scaleX: .5, scaleY: .5, ease:Power2.easeIn, onComplete:zoomTxt},"txt1");
        
        tl4.set("#animStage-4 #icon-plane .check", {autoAlpha: 1, delay: .5});
        tl4.to("#animStage-4 #icon-plane", .5, {rotationX: 90, ease:Power2.easeIn});
        tl4.set("#animStage-4 #icon-storm .check", {autoAlpha: 1, delay: .5});
        tl4.to("#animStage-4 #icon-storm", .5, {rotationX: 90, ease:Power2.easeIn});
        tl4.set("#animStage-4 #icon-bungee .check", {autoAlpha: 1, delay: .5});
        tl4.to("#animStage-4 #icon-bungee", .5, {rotationX: 90, ease:Power2.easeIn});
        tl4.set("#animStage-4 #icon-spider .check", {autoAlpha: 1, delay: .5});
        tl4.to("#animStage-4 #icon-spider", .5, {rotationX: 90, ease:Power2.easeIn});

        // start Animations
        TweenMax.delayedCall(0.2, nextAnimation);
         
    };
};
       $scope.startAnimation();
       $scope.initiateAnimation();
       
});
































