function addClick(){
    window.location.href="index.html";
}

$(function() {
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/5"
    }).done(function(data) {
        var resp=JSON.parse(JSON.stringify( data));
        $('#cardContent').append('<div><br/>DATA FROM A WEB-API : '+resp.userId+" "+resp.title+" "+resp.body+'</div>');
        $("#loader").css("display", "none");
        $("#cardContent").css("display", "block");
    });
});
