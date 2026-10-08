$(document).ready(function(){

    $("#title").text("jQuerryyyyyy")


    $("p:first").css("color", "blue")

    $(".btn2").click(function(){
        $(".btn2").css("background", "lightgreen")
        $("#message".text("You doubled click the button!"))
    })

    $("ul li:first-child").css("color", "pink")

    $("[href]").css("color", "orange")

    $("tr:odd").css("background", "lightblue")

    $("tr:even").css("background", "lightpink")

    $("th").css("background", "yellow")

    $(".btn2").dblclick(function(){
        $(this).css("background", "green")
    })

    $(".btn2").mouseleave(function(){
        $(message).text("Your mouse reached the button")
    })

    $(".btn2").mousedown(function(){
        $(message).css("color", "cyan")
    })

    $(".btn2").mouseup(function(){
        $(message).css("color", "black")
    })

    $("#name").focus(function(){
        $("#message").text("Typing...")
        $(this).css("background", "green")
    })

    $("#name").blur(function(){
        $("#message".text("Output"))
        $(this).css("background", "white")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $(".btn3").click(function(){
        $("#table").hide("ultraspeed")
    })

    $(".btn4").click(function(){
        $("#table").show(1000)
    })

})