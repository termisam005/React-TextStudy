import React from 'react';


function Hello({name, color, isSpecial}) {

    return(
        <div style={{color}}>

            {isSpecial && <b>*</b>} 
            {/* isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>*</b> 가 됩니다.  */}

            안녕하세요 {name}

        </div>
    );

}


Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;