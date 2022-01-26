import  React, { useState,useEffect,useCallback } from 'react';
import axios from 'axios';

{  /*  Components */ }
import  { ChartViewer, ChannelsManager,ChannelModal,ActionMsg } from '../../components';

export default function Welcome () {
        const [ channels, getChannels] = useState([]);
        const [ chanelModal, getChannelModal ] = useState(false);
        const [ channel_id, setChannelId] = useState('')
        const [ channel_name, setChannelName] = useState('')
        const [ clients_amount, setClientsAmount] = useState('')
        const [ channel_color, setChannelColor] = useState('')
        const [ loader, setLoader ] = useState(false)
        const [ actionMsg , getActionMsg ] = useState(false)
        const [ actionDelMsg , getActionDelMsg ] = useState(false)
        const [ objAnimation  , getObjAnimation  ] = useState(false)
        const [ errors, setError] = useState([]);

        const getChannelsAPI = useCallback(async () => {
                const result = await axios( '/api/channel/get-collection');
                getChannels(result.data);
        }, [])

        useEffect(() => {
                getChannelsAPI();
        }, [getChannelsAPI])

        const getModal = (e,ch_name, ch_id,cli_amount,ch_color) =>{  
                e.preventDefault()
                setChannelId(ch_id)
                setChannelName(ch_name)
                setClientsAmount(cli_amount)
                setChannelColor(ch_color)
                getChannelModal(true)
         }

        const closeModal = () =>{  getChannelModal(false);  setError('')  }

        const updateChannel = (e,channel_id) =>{ 
                e.preventDefault();

                setLoader(true)

                axios.post(`/api/channel/update/${channel_id}`,  {
                        channel_name: channel_name,
                        clients_amount: clients_amount,
                        channel_color: channel_color,
                 })

                 .then(response => {
                        if (!response.error) {  
                                setLoader(false)
                                getActionMsg(true)
                                setError('')
                                getChannelModal(false)  
                                getChannelsAPI();

                                setTimeout(function(){ getObjAnimation(true)  }.bind(this),5000);

                                setTimeout(function(){ getObjAnimation(false); getActionMsg(false) }.bind(this), 5500);
                         }
                })

                .catch(error => {   setError(error.response.data.errors); setLoader(false)  } );
         }

         const deleteChannel = (e,channel_id) =>{ 
                e.preventDefault();

                console.log(channel_id)

                axios.get(`/api/channel/delete/${channel_id}`)

                 .then(response => {
                        if (!response.error) {  
                                setError('')
                                getChannelsAPI();
                                getActionDelMsg(true)
                                getChannelModal(false)  

                                setTimeout(function(){ getObjAnimation(true)  }.bind(this),5000);

                                setTimeout(function(){ getObjAnimation(false); getActionDelMsg(false) }.bind(this), 5500);
                         }
                })

                .catch(error => {   setError(error.response.data.errors)  } );
         }

        return (
            <main>
                    {     chanelModal  &&
                        <ChannelModal  id={channel_id}  channel_name= { channel_name}  clients_amount= { clients_amount }  loader={loader}
                        errors={errors} setError={setError}  setClientsAmount={setClientsAmount } deleteChannel ={(e) =>  deleteChannel(e,channel_id) } updateChannel={  (e) => updateChannel(e,channel_id) } closeModal ={closeModal} />
                    }
                    <ChartViewer channels={channels}  />
                    { channels.length != 0 ?
                    <ChannelsManager channels={channels} getModal={getModal }  />  : '' }

                   { (actionMsg || actionDelMsg)  &&    <ActionMsg objAnimation={ objAnimation } actionDelMsg={actionDelMsg} actionMsg={actionMsg}
                    actionDelMessage="Kanał został usunięty." actionMessage="Dane kanału zostały zaktualizowane."   />  }
            </main>
        );
}

