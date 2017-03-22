<?php

namespace API;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
  protected $table = 'notes';
  protected $fillable = ['name', 'description'];
  protected $dates = ['deleted_at'];
}
