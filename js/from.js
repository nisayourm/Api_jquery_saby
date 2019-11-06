$(document).ready (function(){
    db.collection('homework3').get().then((day)=>{
        var result = "";
        
        day.forEach(element => {
            result += `
                
              <div class="card shadow-lg mt-3">
                <div class="card-header">
                    <img src="${element.data().profile}" class="img-fluid rounded-circle" width="50" hieght="50" >

                    ${element.data().name}
                    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">View</button>
                </div>

                <div class="card-body">
                    <img src="${element.data().post}" class="img-fluid">
                    ${element.data().text}
                </div>
                <div class="card-footer">
                 <button class="btn btn-danger float-right" onclick="deletePicture('${element.id}')" type ="button">Delete</button>
            </div>
            </div>

            <div class="modal" id="myModal${element.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
      
        
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
        
       
                        <div class="modal-body">
                            <img src="${element.data().post}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        $('#result').append(result);
    });
    $('#add').on('click',function(){
        var reset = document.querySelector("#add-form");
        var name = $('#name').val();
        var profile = $('#profile').val();
        var post = $('#post').val();
        var text = $('#text').val();
        reset.reset();
        db.collection('homework3').add({

            name:name,
            profile:profile,
            post:post,
            text:text
        });
});

});
function deletePicture(pId){
    db.collection('homework3').doc(pId).delete();
}