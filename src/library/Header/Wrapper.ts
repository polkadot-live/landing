// Copyright 2024 @polkadot-live/landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--background-default);
  border-bottom: 1px solid var(--border-secondary-color);
  border-image: var(--border-gradient) 50;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0.4rem 1.25rem 0.4rem 0.55rem;
  width: 100%;
  height: 2.4rem;
  z-index: 10;

  > div {
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:first-child {
      > h1 {
        font-family: InterBold, sans-serif;
        font-size: 0.72rem;
        text-transform: uppercase;
        color: var(--accent-color-primary);
      }

      > span {
        > svg {
          fill: var(--accent-color-primary);
          width: 100%;
          height: 100%;
        }
      }
      > .version {
        color: var(--text-color-primary);
        font-family: InterSemiBold, sans-serif;
        margin-left: 0.35rem;
        margin-right: 0.5rem;
        font-size: 0.7rem;
        opacity: 0.75;
      }
    }

    &:last-child {
      justify-content: flex-end;

      > button {
        color: var(--text-color-secondary);
        opacity: 0.4;
        transition: opacity 0.2s;
        margin-left: 1.25rem;

        &:hover {
          opacity: 1;
        }
      }
    }

    > span {
      display: flex;
      align-items: center;

      > button {
        color: var(--text-color-secondary);
        font-family: InterSemiBold, sans-serif;
        margin-left: 1rem;
        transition: color 0.15s;

        > svg {
          margin-left: 0.2rem;
        }

        &:hover {
          color: var(--accent-color-primary);
        }
        &:disabled {
          opacity: 0.5;

          &:hover {
            color: var(--text-color-secondary);
          }
        }

        &:first-child {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
