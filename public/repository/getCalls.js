$.getScript('/globalConfig/config.js')
$(document).ready(function () {

    $.get(`${_baseUrl}/charges-by-physicians`,(data, status)=> {
        console.log(status);
        const tableBody = $('#t-data')
        data.forEach(item => {
            tableBody.append(`
            <tr>
            <td>${item.ClaimId}</td>
            <td>${item.Patient}</td>
            <td>${item.DOS}</td>
            <td>${item.Charges}</td>
            <td>${item.PaidAmt}</td>
            <td>${item.Provider}</td>
            <td>${item.Location}</td>
        </tr>
            `)
        })
    })

})