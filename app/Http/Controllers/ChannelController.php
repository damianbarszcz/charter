<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;

class ChannelController extends Controller{
    
        public function getChannels(){
                return Channel::orderBy('id', 'DESC')->get();
        }

        public function createChannel(Request $request){
                $formInput = $this->validate($request,[
                    'channel_name'  =>  'required|unique:channels|min:3|max:25',
                    'clients_amount'  =>  'required|integer',
                    'channel_color' =>  'required',
                ]);

                Channel::create($formInput);
        }

        public function updateChannel(Request $request,$id){
                $formInput = $this->validate($request,[
                    'clients_amount'  =>  'required|integer',
                    'channel_color' =>  'required',
                ]);

                $channel_record = Channel::where('id', $id)->firstOrFail();

                $channel_record->update($formInput);
        }

        public function deleteChannel(Request $request,$id){
                $channel_record = Channel::where('id', $id)->firstOrFail();

                $channel_record->delete();

                return Channel::orderBy('id', 'DESC')->get();
        }
}
