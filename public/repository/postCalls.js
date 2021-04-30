


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

        console.log("Hello")
        
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
})



    // const workSheetsFromFile = xlsx.parse(`${__dirname}/Charges Apr.xls`, { cellDates: true, dateNF: 'dd/mm/yy', cellStyles: true });

    // var rows = [];
    // var writeStr = "";

    // //looping through all sheets
    // for (var i = 0; i < workSheetsFromFile.length; i++) {
    //     var sheet = workSheetsFromFile[i];
    //     //loop through all rows in the sheet
    //     for (var j = 0; j < sheet['data'].length; j++) {
    //         //add the row to the rows array
    //         rows.push(sheet['data'][j]);
    //     }
    // }

    // //creates the csv string to write it to a file
    // for (var i = 0; i < rows.length; i++) {
    //     if (i == 0) {
    //         rows[0].splice(3, 0, 'patientLastName')
    //         rows[0].splice(9, 0, 'providerLastName')
    //         writeStr += rows[i].join(",") + "\n";
    //     } else {
    //         writeStr += rows[i].join(",") + "\n";
    //     }
    // }

    // console.log(writeStr);

    // var file = document.getElementById('myFile').files[0];
    // if (file) {
    //   var reader = new FileReader();

    //   reader.onload = function (e) {
    //     var data = e.target.result;
    //                  var workbook = XLSX.read(data, {//XLSX.read() method will return a workbook object
    //       type: 'binary'
    //     });
    //     readWorkbook(workbook);
    //   };
    //   reader.readAsBinaryString(file);

    // } else {
    //              alert('Please select the file first');
    // }
