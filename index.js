$(document).ready(function(){
    $("#registerUserButton").click(function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var phoneNumber = $("#phoneNumber").val();
        var gender =$("#gender").val();
        var dateOfBirth =$("#dateOfBirth").val();

        let userInput={
        firstname:`${firstname}`,
        lastname:`${lastname}`,
        phoneNumber:`${phoneNumber}`,
        gender:`${gender}`,
        dateOfBirth:`${dateOfBirth}`,

        }
        //NestJs=> REST API(s)

        //Post, Get, Delete, Put

        //CRUD
        //C=create=> Post,
        //R= Read=> Get all or get By Id,
        //U= Update=> Put,
        //D = Delete=> Delete
        $.ajax({
			type: "POST",
		url: "https://60d96e3eeec56d001747778f.mockapi.io/registerUser",
			
			data: userInput,
			
			success: function(res) {
				console.log("success after user is register response" +"  "+JSON.stringify(res));     
			},
			error: function(res) {
                console.log("error"+JSON.stringify(res));

			}
		});
    });

});
function getRecords(){
    $.get("https://60d96e3eeec56d001747778f.mockapi.io/registerUser", function(registeredUsers){
      console.log(registeredUsers)
     });
}
function getRecordsById(){
    $.get("https://60d96e3eeec56d001747778f.mockapi.io/registerUser/1", function(registeredUser){
        console.log("registered user"+ JSON.stringify(registeredUser))

      console.log("registered user firstname"+ JSON.stringify(registeredUser.firstname))
     });
}
getRecords()
getRecordsById()