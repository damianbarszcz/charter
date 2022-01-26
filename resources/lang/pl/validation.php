<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'channel_name' => [
            'required' => 'Podaj nazwę kanału.',
            'unique' => 'Podana nazwa kanału już istnieje.',
            'min' => 'Nazwa kanału musi mieć co najmniej 3 znaki.',
            'max' => 'Nazwa kanału może mieć maksymalnie 25 znaków.',
        ],

        'clients_amount' => [
            'required' => 'Podaj liczbę klientów kanału.',
            'integer' => 'Liczba kanałów musi być liczbą.'
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
