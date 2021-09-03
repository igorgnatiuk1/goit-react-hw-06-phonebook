import PropTypes from 'prop-types'
import styles from './ContactList.module.css'
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';


const ContactList = ({contacts, onDelete }) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number}) => (
                <li key={id} className={styles.item}>
                    {name}: {number}
                    <button onClick={() => onDelete(id)} type="button" className={styles.button}>DELETE</button>

                </li>

            ))}
        </ul>
    );
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};
const getVisibleContacts = (allContats, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContats.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { filter, items } }) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

