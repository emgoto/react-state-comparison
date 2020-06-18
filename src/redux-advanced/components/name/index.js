import { connect } from 'react-redux';
import { nameSelector } from '../../state/selectors';
import { updateListName } from '../../state/actions';
import Name from './view';

const mapStateToProps = (state) => ({
    name: nameSelector(state)
});

const mapDispatchToProps = {
    updateListName
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
