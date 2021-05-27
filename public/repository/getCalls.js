// $.getScript('/globalConfig/config.js')
$(document).ready(function () {

    $.get(`${_baseUrl}/charges-by-physicians`,(data, status)=> {
        console.log("get call working");
        const tableBody = $('#t-data')
        data.forEach(item => {
            tableBody.append(`
            <tr>
            <td>${item.ClaimId}</td>
            <td>${item.Patient + ", " + item.patientLastName}</td>
            <td>${item.DOS}</td>
            <td>$${item.Charges}</td>
            <td>$${item.PaidAmt}</td>
            <td>${item.Provider + ", " + item.providerLastName}</td>
            <td>${item.Location}</td>
        </tr>
            `)
        })
    })

})