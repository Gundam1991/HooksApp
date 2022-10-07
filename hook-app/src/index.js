import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HookApp } from './HooksApp';
import { CounterApp } from './hooks/01_UseState/CounterApp';
import { UseCount } from './hooks/01_UseState/UseCount/UseCount';
import { SimpleForm } from './hooks/01_useEffect/simpleForm';
import reportWebVitals from './reportWebVitals';
import { MultipleCustomHooks } from './03_Examples/MultipleCustomHooks';
import { FocusScreen } from './hooks/useRef/FocusScreen';
import { Layout } from './hooks/useLayoutEffect/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookApp/> */}
    {/* <UseCount/>   */}
    {/* <SimpleForm/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    <Layout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
