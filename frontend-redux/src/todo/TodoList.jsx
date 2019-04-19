import React from 'react'
import IconButton from '../template/IconButton';
import { connect } from 'react-redux'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr
                key={todo._id}
                id={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton
                        style="success"
                        icon="check"
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}>

                    </IconButton>
                    <IconButton
                        style="warning"
                        icon="undo"
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}
                    >
                    </IconButton>
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th className="tableActions">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

// * metodo para mapear o estado do reducers

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)
