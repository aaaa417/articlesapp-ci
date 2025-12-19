// Un test simple qui réussit toujours pour valider le workflow CI
describe('Tests de base du système', () => {
  test('Vérifie que les mathématiques de base fonctionnent', () => {
    expect(1 + 1).toBe(2);
  });

  test('Vérifie que la vérité est vraie', () => {
    expect(true).toBe(true);
  });
});