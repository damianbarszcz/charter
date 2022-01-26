<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/channel'], function(){
    Route::get('/get-collection', [ ChannelController::class, 'getChannels' ]);

    Route::post('/create', [ ChannelController::class, 'createChannel' ]);

    Route::post('/update/{id}', [ ChannelController::class, 'updateChannel' ]);

    Route::get('/delete/{id}', [ ChannelController::class, 'deleteChannel' ]);
});