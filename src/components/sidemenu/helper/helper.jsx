import React from 'react';

import './helper.sass';

const Helper = () => {
    return(
        <div className="helper">
            <div className="helper__icon">
                ?
            </div>

            <div className="helper__content">
                <h3>
                    Help Center
                </h3>
                
                <p className="info">
                    Having Trouble in Learning. Please contact us for more questions.
                </p>

                <button>
                    go to help center
                </button>
            </div>
        </div>
    )
}

export default Helper;