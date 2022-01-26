import  React from 'react';
import { Link } from 'react-router-dom';

const AddChannelForm  = (props)  => {

        return (
                <section  className="channel-adder channel-adder_theme">
                        <header className="channel-adder__header channel-adder__header_modifier">
                                <h1 className="channel-adder__header--title">Dodawanie kanału</h1>
                         </header>
                         
                        <div className="channel-adder__block g-container">
                                <div className="channel-adder__inner channel-adder__inner_modifier">
                                        <form  name="channel-adder__form" className="channel-adder__form" onSubmit={ props.createChannel } method="POST">
                                                    <div className="channel-adder__form-inner">
                                                            <label className="form__label">Nazwa kanału</label>

                                                             <input name="channel_name" type="text"  className={`form__input form__input_effect ${props.errors['channel_name']  ? 'form__input-error' : ''}`}  value={ props.channel_name } onChange={e => props.setChannelName(e.target.value) } tabIndex="1" />

                                                             { props.errors['channel_name'] &&  <div className="form__error form__error_effect"> { props.errors['channel_name'] } </div> }
                                                     </div>

                                                     <div className="channel-adder__form-inner">
                                                             <label className="form__label">Ilość klientów</label>

                                                             <input name="clients_amount" type="text" className={`form__input form__input_effect ${props.errors['clients_amount'] ? 'form__input-error' : ''}`}  value={ props.clients_amount }  onChange={e => props.setClientsAmount(e.target.value) }  tabIndex="2" />                                                 

                                                             { props.errors['clients_amount'] &&  <div className="form__error form__error_effect"> { props.errors['clients_amount'] } </div> }
                                                    </div> 

                                                     <div className="channel-adder__form-actions">
                                                             <Link to="/" className="btn--normal app__button--tgray" target="_self"> Anuluj</Link>

                                                             <button type="submit" className="btn--normal app__button--blue" value="submit"> 
                                                                { props.loader &&  
                                                                     <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Stwórz kanał </span> 
                                                                }</button>
                                                     </div>
                                         </form>
                                </div>
                        </div>
                </section>
        );
}

export default AddChannelForm;
