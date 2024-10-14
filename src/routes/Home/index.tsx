// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { CardWrapper, PageContentWrapper } from 'Wrappers';
import { HeadingWrapper, HomeWrapper } from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const Home = () => (
  <PageContentWrapper className="thin">
    <HomeWrapper>
      <div className="head">
        <div>
          <span>
            <img src="/png/Hero.png" className="logo" />
          </span>
        </div>

        <div className="download">
          <div>
            <a
              href="https://github.com/polkadot-live/polkadot-live-app/releases/download/v0.2.0-alpha/Polkadot.Live-0.2.0-alpha-arm64.dmg"
              download
            >
              <img src="/png/DownloadMac.png" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/polkadot-live/polkadot-live-app/releases/download/v0.2.0-alpha/Polkadot.Live-0.2.0-alpha.Setup.exe"
              download
            >
              <img src="/png/DownloadWindows.png" />
            </a>
          </div>
        </div>
      </div>

      <HeadingWrapper>
        <h3>Developer Resources</h3>
      </HeadingWrapper>

      <span>
        <CardWrapper className="transparent">
          <h3>Polkadot Live Docs</h3>
          <p>Documentation for contributing to and using Polkadot Live.</p>
          <h4>
            <a
              href="https://polkadot-live.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              https://polkadot-live.github.io/
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>

        <CardWrapper className="transparent">
          <h3>Github</h3>
          <p>Find all Polkadot Live repositories on Github.</p>
          <h4>
            <a
              href="https://github.com/polkadot-live"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/polkadot-live
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-3" />
            </a>
          </h4>
        </CardWrapper>
      </span>
    </HomeWrapper>
  </PageContentWrapper>
);
