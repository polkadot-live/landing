// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { CardWrapper, PageContentWrapper } from 'Wrappers';
import { HeadingWrapper, HomeWrapper } from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/pro-solid-svg-icons';

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
            <img src="/png/DownloadWindows.png" />
          </div>
          <div>
            <img src="/png/DownloadMac.png" />
          </div>
        </div>
      </div>

      <HeadingWrapper>
        <h3>Developer Resources</h3>
      </HeadingWrapper>

      <span>
        <CardWrapper className="transparent">
          <h3>Polkadot Live Docs</h3>
          <p>Documentation for using and contributing to Polkadot Live.</p>
          <h4>
            <a
              href="https://docs.polkadot-live.app"
              target="_blank"
              rel="noreferrer"
            >
              https://docs.polkadot-live.app
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
