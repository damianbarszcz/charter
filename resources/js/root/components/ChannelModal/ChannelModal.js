import  React from 'react';
import { Link } from 'react-router-dom';

const ChannelModal  = (props)  => {

        return (
                <div  className="channel-modal channel-modal_modifier" role="dialog">
                        <div className="channel-modal__inner channel-modal__inner_modifier">
                                <button  className="channel-modal__close channel-modal__close_effect" onClick={ props.closeModal }>
                                        <svg className="channel-modal__close--icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                        </svg>
                                </button>

                                <header className="channel-modal__header">
                                        <h2 className="channel-modal__header--title">Kanał: <strong>{props.channel_name} </strong></h2>
                                </header>

                                 <form  name="channel-modal__form" className="channel-modal__form" onSubmit={ props.updateChannel } method="POST">
                                        <div className="channel-modal__form-inner">
                                                <label className="form__label">Nazwa kanału</label>

                                                <input name="channel_name" type="text"  className={`form__input form__input_effect ${props.errors['channel_name']  ? 'form__input-error' : ''}`}  value={ props.channel_name } onChange={e => props.setChannelName(e.target.value) } tabIndex="1" disabled />
                                        </div>

                                        <div className="channel-modal__form-inner">
                                                <label className="form__label">Ilość klientów</label>

                                                <input name="clients_amount" type="text" className={`form__input form__input_effect ${props.errors['clients_amount'] ? 'form__input-error' : ''}`}  value={ props.clients_amount }  onChange={e => props.setClientsAmount(e.target.value) }  tabIndex="2" />                                                 

                                                { props.errors['clients_amount'] &&  <div className="form__error form__error_effect"> { props.errors['clients_amount'] } </div> }
                                        </div> 

                                        <div className="channel-modal__form-actions">
                                                <Link to="#" className="btn--normal app__button--tred" target="_self" onClick={ props.deleteChannel }> Usuń kanał</Link>

                                                <button type="submit" className="btn--normal app__button--blue" value="submit"> 
                                                { props.loader &&  
                                                         <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Aktualizuj </span> 
                                                }</button>
                                        </div>
                                </form>
                        </div>
                </div>
        );
}

export default ChannelModal;
