import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import styled from 'styled-components';


const PrimaryStyledButton = styled(StyledButton)`
background : palevioletred; 
color:white;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          <StyledButton primary>버튼</StyledButton>
          <PrimaryStyledButton primary>버튼</PrimaryStyledButton>
          <StyledButton as="a" href="/">버튼</StyledButton>
        </p>
        
      </header>
    </div>
  );
}

export default App;
