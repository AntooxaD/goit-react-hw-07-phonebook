import { TitleFilter, InputFilter } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contactActions';
import { getFilter } from '../../redux/selectors';

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onChange = data => dispatch(filterContact(data.target.value));

    return (
        <label>
            <TitleFilter> Find contact by name</TitleFilter>
            <InputFilter type="text" value={filter} onChange={onChange} />
        </label>
    );
}

export default Filter;
