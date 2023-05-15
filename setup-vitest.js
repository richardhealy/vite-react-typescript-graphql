import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';

afterEach(() => {
  cleanup();
});
