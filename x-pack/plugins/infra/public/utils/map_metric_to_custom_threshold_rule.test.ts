/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { numberToLetter } from './map_metric_to_custom_threshold_rule';

describe('numberToLetter', () => {
  it('should convert a number to a letter', () => {
    expect(numberToLetter(1)).toEqual('A');
    expect(numberToLetter(2)).toEqual('B');
    expect(numberToLetter(3)).toEqual('C');
    expect(numberToLetter(4)).toEqual('D');
    expect(numberToLetter(5)).toEqual('E');
    expect(numberToLetter(6)).toEqual('F');
    expect(numberToLetter(7)).toEqual('G');
    expect(numberToLetter(8)).toEqual('H');
    expect(numberToLetter(9)).toEqual('I');
    expect(numberToLetter(10)).toEqual('J');
    expect(numberToLetter(11)).toEqual('K');
    expect(numberToLetter(12)).toEqual('L');
    expect(numberToLetter(13)).toEqual('M');
    expect(numberToLetter(14)).toEqual('N');
    expect(numberToLetter(15)).toEqual('O');
    expect(numberToLetter(16)).toEqual('P');
    expect(numberToLetter(17)).toEqual('Q');
    expect(numberToLetter(18)).toEqual('R');
    expect(numberToLetter(19)).toEqual('S');
    expect(numberToLetter(20)).toEqual('T');
    expect(numberToLetter(21)).toEqual('U');
    expect(numberToLetter(22)).toEqual('V');
    expect(numberToLetter(23)).toEqual('W');
    expect(numberToLetter(24)).toEqual('X');
    expect(numberToLetter(25)).toEqual('Y');
    expect(numberToLetter(26)).toEqual('Z');
  });
  it('should not convert and throw an error', () => {
    expect(() => {
      numberToLetter(0);
    }).toThrow('Number should be 1 or greater');
  });
});
