export default function healthStatus({ name, health }) {
  let rezult;
  if (health > 50) {
    rezult = 'healthy';
  }
  if (health <= 50 && health >= 15) {
    rezult = 'wounded';
  }
  if (health < 15) {
    rezult = 'critical';
  }
  return rezult;
}
