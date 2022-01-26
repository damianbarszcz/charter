import  React, { useState }  from 'react';
import axios from 'axios';

{  /*  Components */ }
import  { ChannelAdder,ActionMsg } from '../../components';

export default function AddChannel () {
        const [ channel_name, setChannelName ] = useState('')
        const [ clients_amount, setClientsAmount ] = useState('')
        const [ loader, setLoader ] = useState(false)
        const [ actionMsg , getActionMsg ] = useState(false)
        const [ objAnimation  , getObjAnimation  ] = useState(false)
        const [ errors, setError ] = useState([]);

        const random_hex_color_code = () => {
                let n = (Math.random() * 0xfffff * 1000000).toString(16);
                return '#' + n.slice(0, 6);
        };

        const createChannel = (e) =>{
                e.preventDefault();

                setLoader(true)

                axios.post('/api/channel/create',  {
                        channel_name: channel_name,
                        clients_amount: clients_amount,
                        channel_color: random_hex_color_code()
                 })

                 .then(response => {
                        if (!response.error) {  
                                setLoader(false)
                                getActionMsg(true)
                                setChannelName('')
                                setClientsAmount('')
                                setError('')

                                setTimeout(function(){ getObjAnimation(true)  }.bind(this),5000);

                                setTimeout(function(){ getObjAnimation(false); getActionMsg(false) }.bind(this), 5500);
                         }
                })

                .catch(error => {   setError(error.response.data.errors); setLoader(false)  }  );
        }

        return (
                <main>
                        <ChannelAdder  channel_name = { channel_name } clients_amount ={ clients_amount } 
                        setChannelName={ setChannelName } setClientsAmount={setClientsAmount}  createChannel={ createChannel }  loader={ loader}
                        errors={errors} setError={setError} />
                        {  actionMsg  &&    <ActionMsg objAnimation={ objAnimation }  actionMsg={actionMsg} actionMessage="Nowy kanał został utworzony." />  }
                </main>
        );
}
