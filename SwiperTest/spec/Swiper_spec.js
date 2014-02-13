/**
 * Created by Roger.Harris on 2/12/14.
 */

describe("A swiper", function(){
    var mySwiper;

    beforeEach(function(){
        mySwiper = new Swiper('.swiper-container', {});
    });

    it("exists", function() {
        expect(mySwiper).toBeDefined();
    });

    it("starts on index 0",function() {
        expect(mySwiper.activeIndex).toBe(0);
    });

    it("correctly swipes to the next slide", function() {
        var prev = mySwiper.activeIndex;
        mySwiper.swipeNext();
        var current = mySwiper.activeIndex;

        expect(current).toEqual((prev + 1));
    });

    it("doesn't loop by default", function(){
        mySwiper.swipePrev();
        expect(mySwiper.activeIndex).toBe(0);
    });

    it("that is set to loop actually loops", function(){
        mySwiper = new Swiper('.swiper-container', {
            loop: true
        });
        expect(mySwiper.activeIndex).not.toBe(0);
        expect(mySwiper.previousIndex).toBe(0);
    });
});