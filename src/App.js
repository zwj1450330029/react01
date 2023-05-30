import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <div className="header-box">
          <input placeholder="请输入"></input>
        </div>
        <ul className="todo-main">
          <li>
            <label>
              <input type="checkbox"></input>
              <span>1111111111</span>
            </label>
            <button className="btn">删除</button>
          </li>
          <li>
            <label>
              <input type="checkbox"></input>
              <span>2222222222</span>
            </label>
            <button className="btn">删除</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
