

<div class="modal fade" id="deleteMoneyModal" tabindex="-1" aria-labelledby="deleteMoneyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <form action="{{ $route }}" method="post">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteMoneyModalLabel">Nuevo {{ $slot }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group form-floating mb-3">
                        <input type="text" class="form-control" id="name" name="name" placeholder="nombre">
                        <label class="z-10" for="name">Nombretest1</label>
                    </div>
                    <div class="input-group form-floating mb-3">
                        <input type="number" class="form-control" id="value" name="value" placeholder="nombre">
                        <label class="z-10" for="value">Valortest1</label>
                    </div>
                    @if ($type == "fixed")
                    <div class="input-group form-floating mb-3">
                        <input type="number" class="form-control" id="day" name="day" placeholder="nombre">
                        <label class="z-10" for="day">Díatest1</label>
                    </div>
                    @endif
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelartest</button>
                    <input type="submit" class="btn btn-primary" value="Guardartest"></input>
                </div>
            </form>
        </div>
    </div>
</div>