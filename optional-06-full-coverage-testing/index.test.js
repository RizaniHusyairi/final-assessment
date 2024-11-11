import { describe, test, expect } from 'bun:test';
import sum from './index.js';

describe("sum function", () => {
    // Test untuk input valid positif
    test("should correctly add two positive numbers", () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(10, 20)).toBe(30);
      expect(sum(0, 5)).toBe(5);
    });
  
    // Test untuk nol
    test("should handle zero correctly", () => {
      expect(sum(0, 0)).toBe(0);
      expect(sum(0, 1)).toBe(1);
      expect(sum(1, 0)).toBe(1);
    });
  
    // Test untuk input negatif
    test("should return 0 for negative numbers", () => {
      expect(sum(-1, 5)).toBe(0);
      expect(sum(5, -1)).toBe(0);
      expect(sum(-1, -1)).toBe(0);
    });
  
    // Test untuk non-numeric input
    test("should return 0 for non-numeric inputs", () => {
      expect(sum("1", 2)).toBe(0);
      expect(sum(1, "2")).toBe(0);
      expect(sum("a", "b")).toBe(0);
      expect(sum(null, 1)).toBe(0);
      expect(sum(1, null)).toBe(0);
      expect(sum(undefined, 1)).toBe(0);
      expect(sum(1, undefined)).toBe(0);
    });
  
    // Test untuk decimal numbers
    test("should handle decimal numbers", () => {
      expect(sum(1.5, 2.5)).toBe(4);
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
      expect(sum(2.8, 3.1)).toBeCloseTo(5.9);
    });
  
    // Test untuk large numbers
    test("should handle large numbers", () => {
      expect(sum(999999, 1)).toBe(1000000);
      expect(sum(1000000, 1000000)).toBe(2000000);
    });
  
    // Test untuk tipe data yang berbeda
    test("should return 0 for different invalid types", () => {
      expect(sum({}, 1)).toBe(0);
      expect(sum([], 1)).toBe(0);
      expect(sum(() => {}, 1)).toBe(0);
      expect(sum(true, 1)).toBe(0);
      expect(sum(false, 1)).toBe(0);
      expect(sum(new Date(), 1)).toBe(0);
    });
  });