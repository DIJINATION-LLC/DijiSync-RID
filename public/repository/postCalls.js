


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

        if (Email != "" || Password != "") {
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

        $.post(`${_baseUrl}/auth/local/register`, { username: Username, email: Email, password: Password }, (data, status) => {
            console.log(status);
            console.log(data);
            if (status == "success") {
                window.location = "/"
            }
        })
    })


    $('#btnFile').click(function (e) {

        console.log("Charges by physican")
        
        var file = document.getElementById('myFile').files[0];
        console.log(file);
        const fileData = new FormData()
        fileData.append('files' , file)
        $.ajax({
            processData: false,
            contentType: false,
            cache: false,
            enctype: 'multipart/form-data',
            type: "post",
            url: `${_baseUrl}/upload`,
            data: fileData,
            success: function (data) {
                $.post(`${_baseUrl}/charges-by-physicians/upload`, {data}, (d, status) => {
                    console.log(status);
                    console.log(d);
                    if (status == "success") {
                       console.log("Second Call success");
                    }
                })
            },
            error: function (data) {
                console.log('Error:', data);
            }
        // $.post(`${_baseUrl}/upload`, fileData)
        // .then(res => {
            //     console.log(res);
            // })
        })

        
            e.preventDefault()
    })

    $('#btnInsuranceCharges').click(function (e) {

        console.log("Insurance Charges by physican")
        
        var file = document.getElementById('myFileCharges').files[0];
        console.log(file);
        const fileData = new FormData()
        fileData.append('files' , file)
        $.ajax({
            processData: false,
            contentType: false,
            cache: false,
            enctype: 'multipart/form-data',
            type: "post",
            url: `${_baseUrl}/upload`,
            data: fileData,
            success: function (data) {
                $.post(`${_baseUrl}/insurance-charges-by-physicians/upload`, {data}, (d, status) => {
                    console.log(status);
                    console.log(d.body);
                    if (status == "success") {
                       console.log("Second Call success");
                    }
                })
            },
            error: function (data) {
                console.log('Error:', data);
            }
        })
        e.preventDefault()
    })


})
