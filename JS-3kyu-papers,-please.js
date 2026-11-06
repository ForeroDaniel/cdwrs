function Inspector() {
  this.NATIONS = ['Arstotzka', 'Antegria', 'Impor', 'Kolechia', 'Obristan', 'Republia', 'United Federation'];
  this.allowed = new Set();
  this.nationDocs = {};
  this.vax = {};
  this.NATIONS.forEach(n => {
    this.nationDocs[n] = new Set();
    this.vax[n] = new Set();
  });
  this.workerDocs = new Set();
  this.wanted = null;
}

Inspector.prototype.receiveBulletin = function (bulletin) {
  this.wanted = null;
  const nationsOf = who => {
    if (/^Entrants$/i.test(who)) return this.NATIONS;
    if (/^Foreigners$/i.test(who)) return this.NATIONS.filter(n => n !== 'Arstotzka');
    const m = who.match(/^Citizens of (.+)$/i);
    if (m) return m[1].split(',').map(s => s.trim());
    return [];
  };
  for (const raw of bulletin.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    let m;
    if ((m = line.match(/^Allow citizens of (.+)$/i))) {
      m[1].split(',').forEach(n => this.allowed.add(n.trim()));
    } else if ((m = line.match(/^Deny citizens of (.+)$/i))) {
      m[1].split(',').forEach(n => this.allowed.delete(n.trim()));
    } else if ((m = line.match(/^Wanted by the State: (.+)$/i))) {
      this.wanted = m[1].trim();
    } else if ((m = line.match(/^(.+?) (no longer require|require) (.+)$/i))) {
      const who = m[1].trim();
      const remove = /no longer/i.test(m[2]);
      const what = m[3].trim();
      if (/ vaccination$/i.test(what)) {
        const vac = what.replace(/ vaccination$/i, '').trim();
        nationsOf(who).forEach(n => (remove ? this.vax[n].delete(vac) : this.vax[n].add(vac)));
      } else {
        const doc = what.replace(/ /g, '_');
        if (/^Workers$/i.test(who)) {
          remove ? this.workerDocs.delete(doc) : this.workerDocs.add(doc);
        } else {
          nationsOf(who).forEach(n => (remove ? this.nationDocs[n].delete(doc) : this.nationDocs[n].add(doc)));
        }
      }
    }
  }
};

Inspector.prototype.inspect = function (entrant) {
  const docs = {};
  const keys = Object.keys(entrant);
  for (const k of keys) {
    const o = {};
    String(entrant[k]).split('\n').forEach(l => {
      const i = l.indexOf(': ');
      if (i >= 0) o[l.slice(0, i).trim()] = l.slice(i + 2).trim();
    });
    docs[k] = o;
  }
  const pretty = k => k.replace(/_/g, ' ');

  // 1. Wanted criminal
  if (this.wanted) {
    for (const k of keys) {
      const n = docs[k].NAME;
      if (n && n.split(', ').reverse().join(' ') === this.wanted) {
        return 'Detainment: Entrant is a wanted criminal.';
      }
    }
  }

  // 2. Mismatches
  const fields = [['ID#', 'ID number'], ['NAME', 'name'], ['DOB', 'date of birth'], ['NATION', 'nationality']];
  for (const [f, label] of fields) {
    let ref;
    for (const k of keys) {
      const v = docs[k][f];
      if (v === undefined) continue;
      if (ref === undefined) ref = v;
      else if (v !== ref) return `Detainment: ${label} mismatch.`;
    }
  }

  // 3. Denials
  const passport = docs.passport;
  if (!passport) return 'Entry denied: missing required passport.';
  const nation = passport.NATION;
  const citizen = nation === 'Arstotzka';
  if (!this.allowed.has(nation)) return 'Entry denied: citizen of banned nation.';

  const required = new Set(this.nationDocs[nation]);
  const permit = docs.access_permit;
  if (!citizen && permit && permit.PURPOSE === 'WORK') this.workerDocs.forEach(d => required.add(d));

  for (const d of required) {
    if (d === 'access_permit') {
      if (docs.access_permit || docs.grant_of_asylum) continue;
      if (docs.diplomatic_authorization) {
        const acc = (docs.diplomatic_authorization.ACCESS || '').split(',').map(s => s.trim());
        if (acc.includes('Arstotzka')) continue;
        return 'Entry denied: invalid diplomatic authorization.';
      }
      return 'Entry denied: missing required access permit.';
    }
    if (!docs[d]) return `Entry denied: missing required ${pretty(d)}.`;
  }

  const order = ['passport'].concat(keys.filter(k => k !== 'passport'));
  for (const k of order) {
    const e = docs[k].EXP;
    if (e && e <= '1982.11.22') return `Entry denied: ${pretty(k)} expired.`;
  }

  const req = this.vax[nation];
  if (req.size) {
    const cert = docs.certificate_of_vaccination;
    if (!cert) return 'Entry denied: missing required certificate of vaccination.';
    const have = (cert.VACCINES || '').split(',').map(s => s.trim());
    for (const v of req) if (!have.includes(v)) return 'Entry denied: missing required vaccination.';
  }

  return citizen ? 'Glory to Arstotzka.' : 'Cause no trouble.';
};
