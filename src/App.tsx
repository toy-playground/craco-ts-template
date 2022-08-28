import '@/App.css';

import logo from '@/logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>craco-ts-template</h1>
        <p>
          Made by{' '}
          <a
            className='App-link'
            href='https://github/com/Dreamerryao'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dreamerryao
          </a>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
