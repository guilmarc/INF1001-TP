$(document).ready(function () {

    loadData("");

    $('#search').keyup(function(){
        //alert("key up");
        // stock la valeur du champ dans $entry
        $entry=this.value;
        //alert("entre : "+$entry);
        viderTableau();

        loadData($entry);

    });

});

function viderTableau(){
    $("#table td").not("#th").remove();
}

function loadData(motsaisi){

    //alert("load data. motsaisi ="+motsaisi);
    $.ajax({type:"POST",
        url:"recherche.php",
        data:{key:motsaisi},
        success:function(r){
            //alert(r);
            insert(eval(r));
        },
        error:function(e){
            alert(e);
        }
    });
};

function insert(data){
    for(i = 0; i < data.length; i++){
        $("#table").append("<tr>"+"<td>"+data[i].id+"</td>"+
            "<td>"+data[i].activityname+"</td>"+
            "<td>"+data[i].fullname+"</td>"+
            "<td>"+data[i].count+"</td>"+
            "</tr>");


    }

}