// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--background-default);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  min-height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  li {
    color: var(--text-color-primary);
  }

  a {
    color: var(--text-color-secondary);
  }
`;
