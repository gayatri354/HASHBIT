import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
                const sortedTeams = response.data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedTeams);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return ( <
        div className = "App" >
        <
        h1 > IPL Points Table 2022 < /h1> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Position < /th> <
        th > Team < /th> <
        th > Played < /th> <
        th > Won < /th> <
        th > Lost < /th> <
        th > Tied < /th> <
        th > NR < /th> <
        th > Points < /th> <
        th > NRR < /th> <
        /tr> <
        /thead> <
        tbody > {
            teams.map((team, index) => ( <
                tr key = { team.id } >
                <
                td > { index + 1 } < /td> <
                td > { team.Team } < /td> <
                td > { team.Played } < /td> <
                td > { team.Won } < /td> <
                td > { team.Lost } < /td> <
                td > { team.Tied } < /td> <
                td > { team.NR } < /td> <
                td > { team.Points } < /td> <
                td > { team.NRR } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
}

export default App;