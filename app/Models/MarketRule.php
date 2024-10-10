<?php

namespace App\Models;

use Auth;
use Illuminate\Database\Eloquent\Model;

class MarketRule extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'market_rules';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rule'
    ];


}
