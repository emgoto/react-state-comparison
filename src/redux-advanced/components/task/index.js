import { connect } from 'react-redux';
import {
    updateTaskName,
    updateTaskChecked,
    deleteTask
} from '../../state/actions';
import Task from './view';

const mapDispatchToProps = { updateTaskName, updateTaskChecked, deleteTask };

export default connect(null, mapDispatchToProps)(Task);
