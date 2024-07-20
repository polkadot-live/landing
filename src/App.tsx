// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Header } from 'library/Header';
import { Entry } from 'library/Entry';
import { Body } from 'library/Body';
import { HashRouter } from 'react-router-dom';
import { Router } from 'Router';
import { Footer } from 'library/Footer';

const App = () => (
  <Entry mode="dark" accent="live">
    <HashRouter basename="/">
      <Header />
      <Body>
        <Router />
      </Body>
      <Footer />
    </HashRouter>
  </Entry>
);

export default App;
