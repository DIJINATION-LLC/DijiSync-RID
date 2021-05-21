
$(document).ready(function () {

    $.get(`${_baseUrl}/insurance-charges-by-physicians`,(data, status)=> {
        console.log("charges get call working");
        const tableBody = $('#charge-data')
        data.forEach(item => {
            tableBody.append(`
            <tr>
            <td>${item.Insurance}</td>
            <td>${item.DOS}</td>
            <td>$${item.BilledAmount}</td>
            <td>$${item.Status}</td>
            <td>${item.Provider}</td>
        </tr>
            `)
        })
    })

})