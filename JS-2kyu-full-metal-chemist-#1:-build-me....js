// ---------- Excepciones ----------
class InvalidBond extends Error {}
class UnlockedMolecule extends Error {}
class LockedMolecule extends Error {}
class EmptyMolecule extends Error {}

// ---------- Datos químicos ----------
const VALENCE = { H: 1, B: 3, C: 4, N: 3, O: 2, F: 1, Mg: 2, P: 3, S: 2, Cl: 1, Br: 1 };
// Pesos en décimas de g/mol (enteros) para evitar errores de coma flotante al sumar
const WEIGHT = { H: 10, B: 108, C: 120, N: 140, O: 160, F: 190, Mg: 243, P: 310, S: 321, Cl: 355, Br: 800 };

// Orden para la fórmula: C, H, O y luego el resto alfabéticamente
function formulaOrder(a, b) {
  const rank = e => (e === 'C' ? 0 : e === 'H' ? 1 : e === 'O' ? 2 : 3);
  return rank(a) - rank(b) || (a < b ? -1 : a > b ? 1 : 0);
}

// Orden para toString: C, O, resto alfabéticamente y al final H
function bondOrder(a, b) {
  const rank = e => (e === 'C' ? 0 : e === 'O' ? 1 : e === 'H' ? 3 : 2);
  return rank(a.element) - rank(b.element) ||
    (a.element < b.element ? -1 : a.element > b.element ? 1 : 0) ||
    a.id - b.id;
}

// ---------- Atom ----------
class Atom {
  constructor(elt, id_) {
    this.element = elt;
    this.id = id_;
    this.bonds = []; // átomos enlazados (un átomo repetido = enlace múltiple)
  }

  toString() {
    if (this.bonds.length === 0) return `Atom(${this.element}.${this.id})`;
    const list = [...this.bonds]
      .sort(bondOrder)
      .map(b => (b.element === 'H' ? 'H' : b.element + b.id))
      .join(',');
    return `Atom(${this.element}.${this.id}: ${list})`;
  }
}

// ---------- Molecule ----------
class Molecule {
  constructor(name = '') {
    this._name = name;
    this._atoms = [];    // todos los átomos en orden de creación
    this._branches = []; // cada rama es una lista de átomos
    this._locked = false;
  }

  // --- getters ---
  get name() { return this._name; }
  get atoms() { return this._atoms; }

  get formula() {
    this._requireLocked();
    const count = {};
    for (const a of this._atoms) count[a.element] = (count[a.element] || 0) + 1;
    return Object.keys(count)
      .sort(formulaOrder)
      .map(e => e + (count[e] > 1 ? count[e] : ''))
      .join('');
  }

  get molecularWeight() {
    this._requireLocked();
    const tenths = this._atoms.reduce((sum, a) => sum + WEIGHT[a.element], 0);
    return tenths / 10;
  }

  // --- ayudas internas ---
  _requireLocked() { if (!this._locked) throw new UnlockedMolecule(); }
  _requireUnlocked() { if (this._locked) throw new LockedMolecule(); }

  _atomAt(nc, nb) { return this._branches[nb - 1][nc - 1]; }

  _newAtom(elt) {
    const atom = new Atom(elt, this._atoms.length + 1);
    this._atoms.push(atom);
    return atom;
  }

  _hasRoom(atom) { return atom.bonds.length < VALENCE[atom.element]; }

  _bond(a, b) {
    if (a === b || !this._hasRoom(a) || !this._hasRoom(b)) throw new InvalidBond();
    a.bonds.push(b);
    b.bonds.push(a);
  }

  _removeBond(a, b) {
    a.bonds.splice(a.bonds.indexOf(b), 1);
    b.bonds.splice(b.bonds.indexOf(a), 1);
  }

  // --- modificadores ---
  brancher(...sizes) {
    this._requireUnlocked();
    for (const size of sizes) {
      const branch = [];
      for (let i = 0; i < size; i++) branch.push(this._newAtom('C'));
      // enlaces simples en cadena
      for (let i = 1; i < size; i++) this._bond(branch[i - 1], branch[i]);
      this._branches.push(branch);
    }
    return this;
  }

  bounder(...tuples) {
    this._requireUnlocked();
    for (const [c1, b1, c2, b2] of tuples) {
      this._bond(this._atomAt(c1, b1), this._atomAt(c2, b2));
    }
    return this;
  }

  mutate(...tuples) {
    this._requireUnlocked();
    for (const [nc, nb, elt] of tuples) {
      const atom = this._atomAt(nc, nb);
      // el nuevo elemento debe poder sostener los enlaces que ya tiene
      if (atom.bonds.length > VALENCE[elt]) throw new InvalidBond();
      atom.element = elt;
    }
    return this;
  }

  add(...tuples) {
    this._requireUnlocked();
    for (const [nc, nb, elt] of tuples) {
      const base = this._atomAt(nc, nb);
      if (!this._hasRoom(base)) throw new InvalidBond();
      const atom = this._newAtom(elt);
      this._bond(base, atom);
    }
    return this;
  }

  addChaining(nc, nb, ...elts) {
    this._requireUnlocked();
    const base = this._atomAt(nc, nb);
    const created = [];
    let previous = base;
    try {
      for (const elt of elts) {
        const atom = this._newAtom(elt);
        created.push(atom);
        this._bond(previous, atom);
        previous = atom;
      }
    } catch (e) {
      // deshacer todo lo que se añadió en esta cadena
      if (created.length > 0) {
        const first = created[0];
        if (base.bonds.includes(first)) this._removeBond(base, first);
        this._atoms.length -= created.length;
      }
      throw e;
    }
    return this;
  }

  closer() {
    this._requireUnlocked();
    const originals = [...this._atoms]; // los H nuevos no necesitan más H
    for (const atom of originals) {
      const missing = VALENCE[atom.element] - atom.bonds.length;
      for (let i = 0; i < missing; i++) this._bond(atom, this._newAtom('H'));
    }
    this._locked = true;
    return this;
  }

  unlock() {
    this._locked = false;
    const isH = a => a.element === 'H';

    // quitar los hidrógenos de los enlaces de los demás átomos
    for (const atom of this._atoms) atom.bonds = atom.bonds.filter(b => !isH(b));

    // quitar hidrógenos de la lista de átomos y de las ramas
    this._atoms = this._atoms.filter(a => !isH(a));
    this._branches = this._branches
      .map(branch => branch.filter(a => !isH(a)))
      .filter(branch => branch.length > 0);

    // renumerar ids de forma continua
    this._atoms.forEach((a, i) => { a.id = i + 1; });

    if (this._branches.length === 0) throw new EmptyMolecule();
    return this;
  }
}
