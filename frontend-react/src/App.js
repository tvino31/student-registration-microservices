import React, { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({name:'', email:'', dob:''});

  useEffect(()=>{
    fetch('/api/students')
      .then(r=>r.json())
      .then(setStudents)
      .catch(()=>{});
  },[]);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/students', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    const created = await res.json();
    setStudents(s=>[...s, created]);
    setForm({name:'',email:'',dob:''});
  }

  return (
    <div style={{padding:20}}>
      <h2>Students (React)</h2>
      <ul>
        {students.map(s=> <li key={s.id}>{s.name} ({s.email})</li>)}
      </ul>

      <h3>Register</h3>
      <form onSubmit={submit}>
        <div><input placeholder="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
        <div><input placeholder="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
        <div><input placeholder="YYYY-MM-DD" value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})} /></div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;
