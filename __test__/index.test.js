import healthStatus from '../src/js/app';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 50, 'wounded'],
  ['Маг', 40, 'wounded'],
  ['Маг', 10, 'critical'],
])(
  'return healht status',
  (name, health, expected) => {
    const received = healthStatus({ name, health });
    expect(received).toBe(expected);
  },
);
