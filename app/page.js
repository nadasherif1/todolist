import Head from 'next/head';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="A clean and responsive to-do list application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex justify-center text-black items-center min-h-screen bg-gray-100">
          <TodoList />
        </section>
      </main>
    </div>
  );
}
