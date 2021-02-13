$(document).ready(function () {
    document.getElementById("title").innerHTML = "click Play Button";
    document.getElementById("playAgainBtn").innerHTML = "Play";
    $("#Loading").css("display", "none");

    $("#playAgainBtn").click(function () {
        $("#Loading").css("display", "block");
        $("#playAgainBtn").css("display", "none");
        setTimeout(function () {
            $("#completed").css("display", "none");
            $("#forHide").css("display", "block");
        }, 3000);
    });

    $(".number").click(function () {
        var speaking = $("#count").articulate("isSpeaking");
        var paused = $("#count").articulate("isPaused");

        // This is how you can use one button for a speak/pause toggle
        // Is browser speaking? (This returns 'true' even when paused)
        // If it is, is speaking paused? If paused, then resume; otherwise pause
        // If it isn't, then initiate speaking

        if (speaking) {
            if (paused) {
                $("#count").articulate("resume");
            } else {
                $("#count").articulate("pause");
            }
        } else {
            $("#count").articulate("speak");
        }

        $("#forHide").css("opacity", "0");
        setTimeout(function () {
            $("#forHide").css("opacity", "1");
        }, 3000);

        var counter = parseInt($("#hiddenValue").val());
        counter++;
        $("#hiddenValue").val(counter);
        $(".number").text(counter);

        if (counter == "10") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level One";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Two";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");

            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "20") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Two";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Three";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "30") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Three";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Four";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "40") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Four";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Five";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "50") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Five";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Six";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "60") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Six";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Seven";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "70") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Seven";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Eight";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "80") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Eight";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Nine";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "90") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Nine";
            document.getElementById("playAgainBtn").innerHTML = "Play Level Ten";
            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "block");
            var x = document.getElementById("audiosound");

            x.play();
        } else if (counter == "100") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed Level Ten";

            $("#forHide").css("display", "none");
            $("#Loading").css("display", "none");
            $("#playAgainBtn").css("display", "none");
            var x = document.getElementById("audiosound");

            x.play();
        }

        var couunNumber;
        switch (counter) {
            case 1:
                couunNumber = "One";
                break;
            case 2:
                couunNumber = "Two";
                break;
            case 3:
                couunNumber = "Three";
                break;
            case 4:
                couunNumber = "Four";
                break;
            case 5:
                couunNumber = "Five";
                break;
            case 6:
                couunNumber = "Six";
                break;
            case 7:
                couunNumber = "Seven";
                break;
            case 8:
                couunNumber = "Eight";
                break;
            case 9:
                couunNumber = "Nine";
                break;

            case 10:
                couunNumber = "Ten";
                break;

            case 11:
                couunNumber = "eleven";
                break;

            case 12:
                couunNumber = "twelve";
                break;

            case 13:
                couunNumber = "thirteen";
                break;

            case 14:
                couunNumber = "fourteen";
                break;

            case 15:
                couunNumber = "fifteen";
                break;

            case 16:
                couunNumber = "sixteen";
                break;

            case 17:
                couunNumber = "seventeen";
                break;

            case 18:
                couunNumber = "eighteen";
                break;

            case 19:
                couunNumber = "nineteen	";
                break;

            case 20:
                couunNumber = "twenty";
                break;

            case 21:
                couunNumber = "twenty-one";
                break;

            case 22:
                couunNumber = "twenty-two";
                break;

            case 23:
                couunNumber = "twenty-two";
                break;

            case 24:
                couunNumber = "twenty-four";
                break;

            case 25:
                couunNumber = "twenty-five";
                break;

            case 26:
                couunNumber = "twenty-six";
                break;

            case 27:
                couunNumber = "twenty-seven";
                break;

            case 28:
                couunNumber = "twenty-eight";
                break;

            case 29:
                couunNumber = "twenty-nine";
                break;

            case 30:
                couunNumber = "thirty";
                break;

            case 31:
                couunNumber = "thirty-one";
                break;

            case 32:
                couunNumber = "thirty-two";
                break;

            case 33:
                couunNumber = "thirty-three";
                break;

            case 34:
                couunNumber = "thirty-four";
                break;

            case 35:
                couunNumber = "thirty-five";
                break;

            case 36:
                couunNumber = "thirty-six";
                break;

            case 37:
                couunNumber = "thirty-seven";
                break;

            case 38:
                couunNumber = "thirty-eight";
                break;

            case 39:
                couunNumber = "thirty-nine";
                break;

            case 40:
                couunNumber = "forty";
                break;

            case 41:
                couunNumber = "forty-one";
                break;

            case 42:
                couunNumber = "forty-two";
                break;

            case 43:
                couunNumber = "forty-three";
                break;

            case 44:
                couunNumber = "forty-four";
                break;

            case 45:
                couunNumber = "forty-five";
                break;

            case 46:
                couunNumber = "forty-six";
                break;

            case 47:
                couunNumber = "forty-seven";
                break;

            case 48:
                couunNumber = "forty-eight";
                break;

            case 49:
                couunNumber = "forty-nine";
                break;

            case 50:
                couunNumber = "fifty";
                break;

            case 51:
                couunNumber = "fifty-one";
                break;

            case 52:
                couunNumber = "fifty-two";
                break;

            case 53:
                couunNumber = "fifty-three";
                break;

            case 54:
                couunNumber = "fifty-four";
                break;

            case 55:
                couunNumber = "fifty-five";
                break;

            case 56:
                couunNumber = "fifty-six";
                break;

            case 57:
                couunNumber = "fifty-seven";
                break;

            case 58:
                couunNumber = "fifty-eight";
                break;

            case 59:
                couunNumber = "fifty-nine";
                break;

            case 60:
                couunNumber = "sixty";
                break;

            case 61:
                couunNumber = "sixty-one";
                break;

            case 62:
                couunNumber = "sixty-two";
                break;

            case 63:
                couunNumber = "sixty-three";
                break;

            case 64:
                couunNumber = "sixty-four";
                break;

            case 65:
                couunNumber = "sixty-five";
                break;

            case 66:
                couunNumber = "sixty-six";
                break;

            case 67:
                couunNumber = "sixty-seven";
                break;

            case 68:
                couunNumber = "sixty-eight";
                break;

            case 69:
                couunNumber = "sixty-nine";
                break;

            case 70:
                couunNumber = "seventy";
                break;

            case 71:
                couunNumber = "seventy-one";
                break;

            case 72:
                couunNumber = "seventy-two";
                break;

            case 73:
                couunNumber = "seventy-three";
                break;

            case 74:
                couunNumber = "seventy-four";
                break;

            case 75:
                couunNumber = "seventy-five";
                break;

            case 76:
                couunNumber = "seventy-six";
                break;

            case 77:
                couunNumber = "seventy-seven";
                break;

            case 78:
                couunNumber = "seventy-eight";
                break;

            case 79:
                couunNumber = "seventy-nine";
                break;

            case 80:
                couunNumber = "eighty";
                break;

            case 81:
                couunNumber = "eighty-one";
                break;

            case 82:
                couunNumber = "eighty-two";
                break;

            case 83:
                couunNumber = "eighty-three";
                break;

            case 84:
                couunNumber = "eighty-four";
                break;

            case 85:
                couunNumber = "eighty-five";
                break;

            case 86:
                couunNumber = "eighty-six";
                break;

            case 87:
                couunNumber = "eighty-seven";
                break;

            case 88:
                couunNumber = "eighty-eight";
                break;

            case 89:
                couunNumber = "eighty-nine";
                break;

            case 90:
                couunNumber = "ninety";
                break;

            case 91:
                couunNumber = "ninety-one";
                break;

            case 92:
                couunNumber = "ninety-two";
                break;

            case 93:
                couunNumber = "ninety-three";
                break;

            case 94:
                couunNumber = "ninety-four";
                break;

            case 95:
                couunNumber = "ninety-five";
                break;

            case 95:
                couunNumber = "ninety-six";
                break;

            case 97:
                couunNumber = "ninety-seven";
                break;

            case 98:
                couunNumber = "ninety-eight";
                break;

            case 99:
                couunNumber = "ninety-nine";
                break;

            case 100:
                couunNumber = "one hundred";
                break;
        }
        document.getElementById("count").innerHTML = couunNumber;

        // var x = document.getElementById("audiosound");

        //  x.play();
    });
});
