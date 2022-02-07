const { default: axios } = require("axios");

let data;

$(function () {
    let d = new Date();
    axios
        .get(route, {
            params: {
                date: d.toUTCString()
            },
        })
        .then((response) => {
            data = response.data;
            data.forEach((item) => {
                item.created_at = new Date(Date.parse(item.created_at));
            });
            fillMoneyTable();
            heapSort();
        });
});
function heapSort(){
    let h = new MaxHeap(data,(x)=>{
        return x.value;
    });
    while(h.peek()){
        console.log(h.extractMax().value);
    }
}
function fillMoneyTable() {
    let table = $("#money-table");

    if (!table || !data) {
        return;
    }

    data.forEach((expense) => {
        let d = new Date();
        d.setDate(d.getMonth() + (expense.day - 1));

        let dateString =
            type == "fixed"
                ? d.toDateString()
                : expense.created_at.toDateString();

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
                                <div class="text-left">${dateString}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-center">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Editar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        `);
    });
}
