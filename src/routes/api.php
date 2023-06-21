<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

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



Route::prefix('api')->group(function () {
    Route::get('/todos', [TaskController::class, 'index']); // 全てのTODOを取得する
    Route::post('/todos', [TaskController::class, 'store']); // TODOを作成する
    Route::get('/todos/{id}', [TaskController::class, 'show']); // 特定のTODOを取得する
    Route::get('/todos/{id}', [TaskController::class, 'edit']); // 特定のTODOを取得する
    Route::put('/todos/{id}', [TaskController::class, 'update']); // 特定のTODOを更新する
    Route::delete('/todos/{id}', [TaskController::class, 'destroy']); // 特定のTODOを削除する
});
