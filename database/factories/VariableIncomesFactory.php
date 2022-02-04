<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VariableIncomesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'value' => $this->faker->randomNumber(7, false),
        ];
    }
}
