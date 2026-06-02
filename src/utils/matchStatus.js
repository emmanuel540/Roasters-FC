export function getMatchStatus(fixture) {
  const now = new Date();
  const matchDate = new Date(fixture.date);
  return matchDate > now ? 'upcoming' : matchDate < now ? 'result' : 'live';
}
