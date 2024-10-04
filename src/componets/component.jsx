import PropTypes from 'prop-types';

const Componente = (props) => {
    const { msg } = props;

    return <h2> {msg}</h2>
}

Componente.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Componente