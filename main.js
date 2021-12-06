class Door {
  constructor(opened, locked, key) {
    this.opened = opened;
    this.locked = locked;
    this.key = key;
  }

  openAndUnlocked(key) {
    return new Door(true, false, key);
  }
  openAndLocked(key) {
    return new Door(true, true, key);
  }
  closedAndUnlocked(key) {
    return new Door(false, false, key);
  }
  closedAndLocked(key) {
    return new Door(false, true, key);
  }

  open() {
    if (this.opened === false) {
      return (this.opened = true);
    }
  }
  close() {
    if (this.open === true) {
      return (this.opened = false);
    }
  }
  lock() {
    if (this.locked === true) {
      return (this.locked = false);
    }
  }
  unlock(key) {
    if (this.key === key) {
      return (this.locked = true);
    } else {
      return `This key ${this.key} does not correspond to this door `;
    }
  }

  isOpen() {
    if (this.opened === true) {
      return this.opened;
    } else {
      return false;
    }
  }
  isClosed() {
    if (this.opened === false) {
      return (this.opened = true);
    } else {
      return false;
    }
  }
  isLocked() {
    if (this.locked === true) {
      return this.locked;
    } else {
      return false;
    }
  }
  isUnlocked() {
    if (this.locked === false) {
      return (this.locked = true);
    } else {
      return false;
    }
  }
}
const arr = () => "test";

const door = new Door("123");
let doorOpen = door.openAndUnlocked();
console.log(doorOpen);

// Door: Open, Closed, Locked, Unlocked
//     Open -> Closed
//     Closed -> Open
//     Unlocked -> Locked
//     Locked -> Unlocked

//     Open -> Open : error
//     Closed -> Closed : error
//     ...

// --------------------------------------------
// Door.OpenAndUnlocked(key: guid)
// Door.OpenAndLocked(key: guid)
// Door.ClosedAndUnlocked(key: guid)
// Door.ClosedAndLocked(key: guid)

// val door = Door.xyz

// door.Open() //when Locked error
// door.Close()
// door.Lock()
// door.Unlock(key)

// door.IsOpen, IsClosed, IsLocked, IsUnlocked -> boolean

// Room 1: OOP, Imperative, Mutable
//     val doorA = Door.OpenAndLocked(someKey); // Open + Locked
//     doorA.Close(); // Closed + Locked

// Room 2: OOP, Functional (no mutation)
//     val doorA = Door.OpenAndLocked(someKey); // Open + Locked
//     val doorB = doorA.Close(); // Closed + Locked
