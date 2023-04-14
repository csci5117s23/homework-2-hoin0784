import React,{useState} from 'react';
import Header from '@/components/Header/Header';
import TodoList from '@/components/TodoList/TodoList';
// import TodoList from '@/components/TodoList/TodoList';
// import Header from "@/components/Header/Header";

// filter types
const filters = ['all', 'active', 'completed'];

export default function Active() {
  
  const [filter, setFilter] = useState(filters[1]);
  return (
    <>
      This is Active part
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

