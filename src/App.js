import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'Devops',
      color: '#E06B69'
    },
    {
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ])

  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  function deleteEmployee() {
    console.log('Deletando colaborador!');
  }

  function changeTeamColor(newColor, teamName) {
    setTeams(teams.map(team => {
      if (team.name === teamName) {
        team.color = newColor;
      }
      return team;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onRegister={employee => addNewEmployee(employee)} />

      {teams.map(team => 
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.color}
          employees={employees.filter(employee => employee.team === team.name)}
          onDelete={deleteEmployee}
          onChangeTeamColor={changeTeamColor}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;