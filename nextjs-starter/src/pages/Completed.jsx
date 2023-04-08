import React,{useState} from 'react';
import TodoList from '@/components/TodoList/TodoList';
import Header from "@/components/Header/Header";

const filters = ['all', 'active', 'completed'];

export default function Completed() {

  const [filter, setFilter] = useState(filters[2]);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

