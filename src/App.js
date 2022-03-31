import './App.css';
import useMetaMask from './hooks/metamask';
import { Button } from 'antd'

function App() {

  const { connect, isActive, account, shouldDisable } = useMetaMask()

  return (
    <div className="App">
      <header className="App-header">

        <Button onClick={connect} disabled={shouldDisable}> Get Public Key</Button>
        {isActive ? <span>Public Address: {account}</span> : <span>MetaMask is locked - please login</span>}
      </header>
    </div>
  );
}

export default App;