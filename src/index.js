import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HeadingTag } from './HeadingTag';
import { Boldtag } from './Boldtag';
import { Inputtag } from './Inputtag';
import { Imgtag } from './Imgtag';
import { Ptag } from './Ptag';
//import { Loginform } from './Loginform';
import { Italictag } from './Italictag';
import { Tabletag } from './Tabletag';
import { Button } from './Button';
//import { Signupform } from './Signupform';
import { Tabledata } from './Tabledata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <HeadingTag></HeadingTag>
  <Boldtag></Boldtag>
  <Inputtag></Inputtag>
  <Imgtag></Imgtag>
  <Ptag></Ptag>

  <Italictag></Italictag>
  <Tabletag></Tabletag>
  <Button></Button>

  <Tabledata></Tabledata>

  </>
);

reportWebVitals();
