$(document).ready(function () {

    loadData("");

    $('#search').keyup(function(){
        $entry=this.value;
        viderTableau();
        loadData($entry);
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
};

function insert(data){
    if(data[0].id!=null){
        for(i = 0; i < data.length; i++) {
            $("#table").append("<tr>" + "<td>" + data[i].id + "</td>" +
                "<td>" + data[i].activityname + "</td>" +
                "<td>" + data[i].fullname + "</td>" +
                "<td>" + data[i].count + "</td>" +
                "</tr>");
        }
    }
}