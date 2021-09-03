import styles from './Filter.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({value, onChange}) => (
    <label className={styles.label}>
        <input type="text" value={value} onChange={onChange} className={styles.input}/>
    </label>
)
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);