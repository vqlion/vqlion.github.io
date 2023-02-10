$(document).ready(function () {
    var supportedFlag = $.keyframe.isSupported();
    var content = $(".content");

    content.hover(
        function () {
            var rotation = getRotationDegrees($(this));
            $.keyframe.define([
                {
                    name: "on-hover",
                    "0%": { transform: `scale(100%) rotate(${rotation}deg)` },
                    "6%": { transform: `scale(105%) rotate(${rotation}deg)` },
                    "12%": { transform: `scale(100%) rotate(${rotation}deg)` },
                    "18%": { transform: `scale(105%) rotate(${rotation}deg)` },
                    "25%": { transform: `scale(100%) rotate(${rotation}deg)` },
                    "100%": { transform: `scale(100%) rotate(${rotation}deg)` },
                }
            ]);

            $(this).playKeyframe({
                name: "on-hover", // name of the keyframe you want to bind to the selected element
                duration: "1s", // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: "linear", // [optional, default: ease] specifies the speed curve of the animation
                delay: "0s", //[optional, default: 0s]  how long you want to wait before the animation starts
                iterationCount: "infinite", //[optional, default:1]  how many times you want the animation to repeat
                direction: "normal", //[optional, default: 'normal']  which direction you want the frames to flow
                fillMode: "forwards", //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                complete: function () {}, //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
            });

            document.body.style.setProperty("--rot", `${rotation}deg`);
            console.log(document.body.style.getPropertyValue("--rot"));
        },
        function () {
          $(this).resetKeyframe();
        }
    );

    console.log(content);

    function getRotationDegrees(obj) {
        var matrix =
            obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        if (matrix !== "none") {
            var values = matrix.split("(")[1].split(")")[0].split(",");
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else {
            var angle = 0;
        }
        return angle < 0 ? angle + 360 : angle;
    }
});
