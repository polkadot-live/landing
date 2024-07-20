// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GithubRepoUrl } from 'consts';
import { HeaderWrapper } from './Wrapper';
import { version } from '../../../package.json';
import { Link } from 'react-router-dom';

export const Header = () => (
  <HeaderWrapper>
    <div>
      <span
        style={{ width: '1.1rem', height: '1.1rem', marginRight: '0.4rem' }}
      >
        <Link to="/">
          <img src="/png/HeaderLogo.png" style={{ height: '1.5rem' }} />
        </Link>
      </span>
      <span className="version">{version}</span>
    </div>
    <div>
      <button type="button" onClick={() => window.open(GithubRepoUrl)}>
        <FontAwesomeIcon icon={faGithub} transform="grow-4" />
      </button>
    </div>
  </HeaderWrapper>
);
