$(function () {

    $("#eventType").change(function () {
        let select = $("#eventType :selected").val();

        switch (select) {
            case "Teatro":
                $("#title, #synopsis, #writer, #director, #author, #curator, #cast, #duration, #classification, #price, #free").show();
                $("#conception, #book, #author, #moderator, #curator, #band, #guests").hide("fast");

                break;
            case "Cinema":
                $("#title, #synopsis, #director, #cast, #duration, #classification, #price, #free").show();
                $("#writer, #conception, #book, #author, #moderator, #curator, #band, #guests").hide("fast");

                break;
            case "Debate Literário":
                $("#title, #conception, #director, #book, #author, #moderator, #band, #cast, #guests, #free").show();
                $("#synopsis, #writer, #curator, #duration, #classification, #price").hide("fast");
                break;

            case "Dança":
                $("#title, #synopsis, #book, #author, #moderator, #curator, #band, #guests").show();
                $("#writer, #conception, #director, #cast, #duration, #classification, #price, #free").hide("fast");
                break;

            case "Artes visuais e exposições":
                $("#title, #synopsis, #writer, #curator, #guests, #free").show();
                $("#writer, #conception, #director, #book, #author, #moderator, #band, #cast, #duration, #classification, #price").hide("fast");
                break;

            case "Música":
                $("#title, #synopsis, #band, #classification, #price, #free").show();
                $("#writer, #conception, #director, #book, #author, #moderator, #curator, #cast, #guests, #duration").hide("fast");
                break;
            default:
                break;
        };
        
    });
    $("#free").change(function () {
        if ($("#free").prop("checked")) {
            $("#price").hide();
        } else {
            $("#price").show();            

        }
    })
    
});