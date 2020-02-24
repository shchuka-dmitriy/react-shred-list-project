import React, { Component } from 'react';
import './App.css';
import './reset.css'

const coaches = [
    {
        id: '1',
        firstName: 'Brian',
        lastName: 'McCauley',
        level: '1',
        profilePicture: 'data:image/jpeg;base64,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'
    },
    {
        id: '2',
        firstName: 'Chad',
        lastName: 'Hayes',
        level: '2',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1qHq4jWAOgWXpa065OOjDCZLNjkOJP8wutmL0KQAo1ed603d_'
    },
    {
        id: '3',
        firstName: 'Jeff',
        lastName: 'Buck',
        level: '3',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lDe0Bfn6XiPOYCRCNEU40kwQND90e7s1gl3uXGXKUu9vy1tv'
    },
    {
        id: '4',
        firstName: 'Kenny',
        lastName: 'Griffin',
        level: '4',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBZKlkK77OKV-nZ7GNnv-QpVg3-kSZv0CFTBRW-ZmPZFSDTZBF'
    },
    {
        id: '5',
        firstName: 'Tom',
        lastName: 'Glover',
        level: '5',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd1mA6TXdwtjFxc-xKvIT7dpXpLIkXosovWi7NaI0Td-Cxfg6F'
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: coaches.map(coach => ({...coach, isSelected: false})),

        }
    }

    select = (checkCoach) => {
        this.setState(

        )
    };

    coachesRender = (coaches) => {
        return coaches.map(coach => {
            return (
                <ol className="coachContainer" onClick={this.select(coach.id)} key={coach.id}>
                    <div className="profilePictureContainer">
                        <img className="profilePicture" src={coach.profilePicture} alt={'coach'}/>
                    </div>
                    <div className="profileInfoAndOvalContainer">
                        <div className="profileInfo">
                            <div className="profileFullName">{`${coach.firstName}`} {`${coach.lastName}`}</div>
                            <div className="profileLevel">Level {`${coach.level}`}</div>
                        </div>
                        <div className="oval">

                        </div>
                    </div>
                </ol>)
        })
    };

    render() {
        return (
            <div className="App">
                <div className="mainContainer">
                    <div>
                        <div className="selectedCoachContainer">
                            <div className="to">To:</div>
                            <div className="selectedCoachField">
Hello
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.coachesRender(this.state.items)}
                    </div>
                </div>
            </div>
        );
  }
}

export default App;
