import Header from '@/components/Header/Header';
import TodoList from '@/components/TodoList/TodoList';
import { useState } from 'react';


// filter types
const filters = ['all', 'active', 'completed'];

export default function AddAll() {
  
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      This is AddAll part
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

