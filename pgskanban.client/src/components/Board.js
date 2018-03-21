import React from 'react'
import List from './List'
import FakeData from '../FakeData'
import './Board.css'

export default class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            boardName: 'Best board ever!',
            boardData: []
        }
    }

    componentDidMount() {
        this.setState({boardData: FakeData})

    }

    renderList = () => {
        return this.state.boardData.map(
            (list) => <List listName={list.listName} cards={list.cards}/>);
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.boardName }
                    <button className="btn btn-info">Add new list</button>
                    <input/>
                </div>
                <div>                
                    {this.renderList()}
                </div>
            </div>
        )
    }
}