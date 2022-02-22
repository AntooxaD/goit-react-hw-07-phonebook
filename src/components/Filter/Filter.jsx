import { TitleFilter, InputFilter } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contactActions';
import { getFilter } from '../../redux/selectors';

function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const onChange = data => dispatch(filterContact(data.currentTarget.value));

    return (
        <label>
            <TitleFilter> Find contact by name</TitleFilter>
            <InputFilter type="text" value={value} onChange={onChange} />
        </label>
    );
}

export default Filter;
