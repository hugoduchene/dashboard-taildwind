import { Timeline } from './Timeline'
const App = () => {
  return (<>
  <div className="container mx-auto md:px-16 px-4 flex flex-col justify-center h-screen md:block">
    <div className="md:pt-16 md:pb-16 flex justify-end">
      <select name="" className="w-1/4 p-2">
        <option value="">Project 1</option>
        <option value="">Project 2</option>
        <option value="">Project 3</option>
      </select>
    </div>

    <div className="grid md:grid-cols-3 md:h-32 pt-4 h-64">
        <div className="bg-white flex justify-center md:w-11/12 border-2 border-gray-200 ml-0 w-full items-center mt-1 shadow-md">
          15% tasks completed
        </div>
        <div className="bg-white flex justify-center md:w-11/12 border-2 border-gray-200 mx-auto w-full items-center mt-1 shadow-md">
          10% questions answered
        </div>
        <div className="bg-white flex justify-center md:w-11/12 border-2 border-gray-200 mx-auto mr-0 w-full items-center mt-1 shadow-md">
          Deadline / remaining day
        </div>
      </div>

      <div className="md:pt-16 md:pb-16 pt-4 pb-4 flex justify-end">
        <select name="" className="w-1/4 p-2">
          <option value="">Module 1</option>
          <option value="">Module 2</option>
          <option value="">Module 3</option>
        </select>
      </div>

      <div className="w-full">
        <Timeline infos={[{
          task: 'Task',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          date: '20/10/2025',
        },
        {
          task: 'Task',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          date: '20/10/2025',
        },
        {
          task: 'Task',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          date: '20/10/2025',
        },
        {
          task: 'Task',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          date: '20/10/2025',
        },
        ]} />
      </div>
  </div>
  </>);
}

export default App;
