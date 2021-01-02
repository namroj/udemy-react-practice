import React from 'react';
import PropTypes from 'prop-types'

// Functional Component
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}!</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 4) }</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;