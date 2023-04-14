import React,{useState} from 'react';
import Header from '@/components/Header/Header';
import TodoList from '@/components/TodoList/TodoList';

// filter types
const filters = ['all', 'active', 'completed'];

export default function Completed() {

  const [filter, setFilter] = useState(filters[2]);

  return (
    <>
      This is completed part
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

