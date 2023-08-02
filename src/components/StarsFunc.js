import Star from './StarFunc';
import PropTypes from 'prop-types';

export default function Stars(props) {
    const { count } = props;

    if (count < 1 || count > 5 || count === Number) {
        return null
    }

    const starsArr = Array.from({ length: count }, (v, k) => k+1)

    return (
        <ul className='card-body-stars u-clearfix'>
            {starsArr.map(item => 
                <li key={item}><Star /></li>
            )}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
    };
Stars.propTypes = {
    count: PropTypes.number
    };
