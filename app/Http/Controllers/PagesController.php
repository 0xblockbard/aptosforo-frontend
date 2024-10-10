<?php

namespace App\Http\Controllers;

use Auth;
use Redirect;
use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function home(){
        try {
            return view('markets.show_all_markets');
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function about(){
        try {
            return view('pages.about');
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function guide(){
        try {
            return view('pages.guide');
        } catch(\Exception $e){
            abort(400);
        }
    }

    public function connected(){
        try {
            return view('pages.connected');
        } catch(\Exception $e){
            abort(400);
        }
    }

}
