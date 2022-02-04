let data;

$(function () {
    axios.get(route).then((response) => {
        data = response.data;
        data.forEach((item) => {
            item.created_at = new Date(Date.parse(item.created_at));
        });
        fillMoneyTable();
    });
});

function fillMoneyTable() {
    let table = $("#money-table");

    if (!table || !data) {
        return;
    }

    data.forEach((expense) => {

        let d = new Date();
        d.setDate(d.getMonth() + expense.day);
    
        let dateString = type == "fixed" ? d.toDateString() : expense.created_at.toDateString();

        table.append(`
                        <tr>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">${expense.name}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium ${color} ">
                                    $${new Intl.NumberFormat().format(
                                        expense.value
                                    )}
                                </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">${ dateString }</div>
                            </td>
                        </tr>
                        `);
    });
}
