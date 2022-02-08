<?php

namespace App\View\Components;

use Illuminate\View\Component;

class EditMoneyTableModal extends Component
{
    public $type;
    public $route;
    public $color;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($type, $route, $color)
    {
        $this->type = $type;
        $this->route = $route;
        $this->color = $color;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.edit-money-table-modal');
    }
}
