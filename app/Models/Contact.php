<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'service',
        'message',
        'is_read'
    ];

    protected $casts = [
        'is_read' => 'boolean'
    ];
}
