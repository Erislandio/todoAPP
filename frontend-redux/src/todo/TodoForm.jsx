import React from 'react'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/actions';

const TodoForm = props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.changeDescription}
            />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton
                style="primary"
                icon="plus"
                onClick={props.handleAdd}>
            </IconButton>
            <IconButton
                style="info"
                icon="search"
                onClick={props.handleSearch} />
            <IconButton
                style="default"
                icon="close"
                onClick={props.handleClear}
            />
        </Grid>
        {
            console.log(props)

        }
    </div>
)

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)