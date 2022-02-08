<x-search-bar></x-search-bar>
<script src="/js/lib/max-heap.js"></script>
<script src="/js/components/money-table.js"></script>
<script>
    const type = "{{ $type }}";
    const route = "{{ $route }}";
    const color = "{{ $color }}";
</script>

<div class="flex flex-col justify-center my-10">
    <!-- Table -->
    <div class="lg:w-2/3 w-5/6 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <div class="p-3">
            <div class="overflow-x-auto">
                <table class="table-auto w-full" id="money-table">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Nombre del {{ $slot }}</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Valor</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">{{ $type == "fixed" ? "Próximo pago" : "fecha" }}</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Acciones</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<x-money-table-modal :type="$type" :route="$route">{{ $slot }}</x-money-table-modal>
<x-edit-money-table-modal :type="$type" :route="$route">{{ $slot }}</x-edit-money-table-modal>