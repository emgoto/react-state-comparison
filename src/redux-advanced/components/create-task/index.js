import { connect } from 'react-redux';
import { createTask } from '../../state/actions';
import CreateTask from './view';

const mapDispatchToProps = { createTask };

export default connect(null, mapDispatchToProps)(CreateTask);
