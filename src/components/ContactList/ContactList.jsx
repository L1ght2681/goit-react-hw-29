import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
