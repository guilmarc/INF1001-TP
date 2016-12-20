$(document).ready(function () {

    loadData("");

    $('#search').keyup(function(){
        viderTableau();
        loadData(this.value);
    });

});


function viderTableau(){
    $("#table td").not("#th").remove();
}

function loadData(motsaisi){

    $.ajax({type:"POST",
        url:"recherche.php",
        data:{key:motsaisi},
        success:function(r){
            insert(eval(r));
        },
        error:function(e){
            alert(e);
        }
    });
}

function insert(data){

    if(data[0][0]!=null){
        for(var i = 0; i < data.length; i++) {
            $("#table").append("<tr>" + "<td>" + data[i][0] + "</td>" +
                "<td>" + data[i][1] + "</td>" +
                "<td>" + data[i][2]+ "</td>" +
                "<td>" + data[i][3]  + "</td>" +
                "</tr>");
        }


    }
}