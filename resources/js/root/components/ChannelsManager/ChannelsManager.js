import  React from 'react';
import { sum } from '../../components/Global/Global';


const ChannelsManager  = (props)  => {

        return (
            <section  className="channel-manager channel-manager_theme">
                    <div className="channel-manager__block g-container">
                            <div className="channel-manager__inner channel-manager__inner_modifier">
                                       <table className="channel-manager__table">
                                                <colgroup>
                                                        <col span="1" style={{width: '2.5%' }}/>
                                                        <col span="1" style={{width: '67.5%' }}/>
                                                        <col span="1" style={{width: '15%' }}/>
                                                        <col span="1" style={{width: '15%' }}/>
                                                </colgroup>

                                                <thead className="channel-manager__table-head">
                                                        <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col">Kanały</th>
                                                                <th scope="col">Ilość:<span style={{marginLeft: '0.5rem' }}>{sum(props.channels?.map(x => x.clients_amount))}</span>  </th>
                                                        </tr>
                                                </thead>

                                                <tbody className="channel-manager__table-body">
                                                        { props.channels.map(channel  => (
                                                        <tr key={channel.id}>
                                                                <td><span className="channel-manager__table-body-circle" style={{backgroundColor: channel.channel_color}}></span> </td>
                                                                <td>{channel.channel_name} </td>
                                                                <td>{channel.clients_amount}</td>
                                                                <td>
                                                                        <button className="channel-manager__table-body-btn" onClick={(e) => props.getModal(e,channel.channel_name, channel.id, channel.clients_amount, channel.channel_color)}>
                                                                                <svg className="channel-manager__table-body-btn--icon" width="18" height="18"viewBox="0 0 24 24">
                                                                                        <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                                                                </svg>
                                                                        </button>
                                                                </td>
                                                        </tr>))}
                                                </tbody>
                                       </table>
                            </div>
                    </div>
            </section>
        );
}

export default ChannelsManager;
