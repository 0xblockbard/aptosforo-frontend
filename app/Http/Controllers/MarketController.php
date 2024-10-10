<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use Illuminate\Http\Request;

class MarketController extends Controller
{

    public function showAll(){
        try {
            return view('markets.show_all_markets');
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function showAllCategory($category){
        try {
            return view('markets.show_all_markets_category', compact('category'));
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function show($id){
        try {
            return view('markets.show_market', compact('id'));
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function showPool($id){
        try {
            return view('markets.show_market_pool', compact('id'));
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function create(){
        try {
            return view('markets.create_market');
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function edit($id){
        try {
            return view('markets.edit_market', compact('id'));
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function faucet(){
        try {
            return view('markets.faucet');
        } catch(\Exception $e){
            abort(400);
        }
    }
}
