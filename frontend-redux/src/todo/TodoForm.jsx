import React, { Component } from 'react'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add } from '../actions/actions';
import props from '../main/Routers';

class TodoForm extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description } = this.props
        if (e.key === "Enter") {

            e.shiftKey ? search() : add(description)
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }


    render() {
        const { add, search, description } = this.props

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        onKeyUp={this.keyHandler}
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                    />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() => add(description)}>
                    </IconButton>
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={() => search()} />
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={props.handleClear}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription,
    search,
    add
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)