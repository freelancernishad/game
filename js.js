$(document).ready(function () {
    $(".number").click(function () {
        $("#forHide").css("opacity", "0");
        setTimeout(function () {
            $("#forHide").css("opacity", "1");
        }, 3000);

        var counter = parseInt($("#hiddenValue").val());

        if (counter == "10") {
            $("#completed").css("display", "block");
            document.getElementById("title").innerHTML = "You are successfully completed your mission";
        } else {
            counter++;
            $("#hiddenValue").val(counter);
            $(".number").text(counter);
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
        }
        document.getElementById("count").innerHTML = couunNumber;

        var x = document.getElementById("audiosound");

        x.play();
    });
});
