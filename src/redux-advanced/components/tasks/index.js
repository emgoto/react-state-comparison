import { connect } from 'react-redux';
import { tasksSelector } from '../../state/selectors';
import Task from '../task';
import Tasks from './view';

const mapStateToProps = (state) => ({
    Task,
    tasks: tasksSelector(state)
});

export default connect(mapStateToProps, null)(Tasks);
