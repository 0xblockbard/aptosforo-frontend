<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['uses' => 'PagesController@home'])->name('home');
Route::get('/about', ['uses' => 'PagesController@about'])->name('about');
Route::get('/guide', ['uses' => 'PagesController@guide'])->name('guide');
Route::get('/connected', ['uses' => 'PagesController@connected'])->name('connected');

Route::get('/start', ['uses' => 'MarketController@create'])->name('create_market');
Route::get('/markets', ['uses' => 'MarketController@showAll'])->name('show_all_markets');
Route::get('/markets/{id}', ['uses' => 'MarketController@show'])->where('id', '[0-9]+')->name('show_market');
Route::get('/markets/{id}/pool', ['uses' => 'MarketController@showPool'])->where('id', '[0-9]+')->name('show_market_pool');
Route::get('/markets/{category}', ['uses' => 'MarketController@showAllCategory'])->where('category', '[a-zA-Z]+')->name('show_all_markets_category');

Route::get('/faucet', ['uses' => 'MarketController@faucet'])->name('faucet');
