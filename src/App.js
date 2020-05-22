import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJs', 'React Native']);
  const [newTech, setNewTech] = useState('');

  // function handleAdd() {
  //   setTechs([...techs, newTech]);
  //   setNewTech('');
  // }
  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const tech = localStorage.getItem('techs');

    if (tech) {
      setTechs(JSON.parse(tech));
    }

    // ComponentWillUnmount
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
