
$.getScript('/globalConfig/config.js')
$(document).ready(function () {

    $('#btnLogin').click(function (e) {

        e.preventDefault()
        console.log('button clicked')

        console.log(_baseUrl);

        const Email = $('#Email').val();
        const Password = $('#Password').val();
        // const ReasonOfBuying = $('#ReasonOfBuying').val();
        // const Cnic = $('#Cnic').val();
        // const Gender = $('#Gender').val();
        // const Age = $('#Age').val();

        if(Email != "" || Password != ""){
            $.post(`${_baseUrl}/auth/local`, { identifier: Email, password: Password }, (data, status) => {
                console.log(status);
                console.log(data);
                if (status == "success") {
                    window.location = "/"
                }
            })
        }

    })

    $('#btnRegister').click(function (e) {

        e.preventDefault()
        console.log('button clicked')

        console.log(_baseUrl);

        const FirstName = $('#FirstName').val();
        const LastName = $('#LastName').val();
        const Username = FirstName + LastName
        const Email = $('#Email').val();
        const Password = $('#Password').val();
        // const Gender = $('#Gender').val();
        // const Age = $('#Age').val();

        $.post(`${_baseUrl}/auth/local/register`, { username: Username, email: Email , password: Password }, (data, status) => {
            console.log(status);
            console.log(data);
            if (status == "success") {
                window.location = "/"
            }
        })
    })

})