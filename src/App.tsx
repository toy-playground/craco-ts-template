import '@/App.css';

import Button from '@/components/Button';

import logo from '@/logo.svg';

const HOMEPAGE_URL = 'https://github.com/toy-playground/craco-ts-template';
function App() {
  const linkToHome = () => {
    window.open(HOMEPAGE_URL);
  };
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
        <Button onClick={linkToHome}>
          And this is a button link to github.
        </Button>
      </header>
    </div>
  );
}

export default App;
