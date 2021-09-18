import healthStatus from '../src/js/app';

test('return healht status', () => {
  const input = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = healthStatus(input);

  expect(received).toBe(expected);
});

test('return healht status', () => {
  const input = { name: 'Маг', health: 40 };
  const expected = 'wounded';
  const received = healthStatus(input);

  expect(received).toBe(expected);
});

test('return healht status', () => {
  const input = { name: 'Маг', health: 10 };
  const expected = 'critical';
  const received = healthStatus(input);

  expect(received).toBe(expected);
});
