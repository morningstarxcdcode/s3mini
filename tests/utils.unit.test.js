// Basic unit test for a utility function as an example
import { describe, it, expect } from '@jest/globals';
import { sanitizeETag } from '../src/utils';

describe('sanitizeETag', () => {
  it('should remove quotes from ETag', () => {
    expect(sanitizeETag('"abc123"')).toBe('abc123');
  });
  it('should return the same string if no quotes', () => {
    expect(sanitizeETag('abc123')).toBe('abc123');
  });
});
