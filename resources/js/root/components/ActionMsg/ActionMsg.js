import  React from 'react';

const ActionMsg  = (props)  => {

        return (
            <div className={`action-msg action-msg_modifier ${ props.objAnimation  ? 'action-msg--fadeInUp' : 'action-msg--fadeInDown'}`} >
                    <div className="action-msg__inner">
                                <span className="action-msg__art action-msg__art_effect">
                                        <svg className="action-msg__art--icon" width="30" height="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                                        </svg>
                                </span>
                                { props.actionMsg &&
                                        <span className="action-msg__caption"> { props.actionMessage }  </span>
                                }
                                 { props.actionDelMsg  &&
                                        <span className="action-msg__caption"> {props.actionDelMessage} </span>
                                 }
                    </div>
            </div>
        );
}

export default ActionMsg;
