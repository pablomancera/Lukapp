<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Ahorros
        </h2>
    </x-slot>
    <x-money-table route="/expenses/variable" type="variable" color="text-red-500">gasto</x-money-table>
</x-app-layout>