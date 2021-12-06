describe("Kata Door", () => {
  it("Create a door Open and unlocked, verify is the door is open and unlocked", () => {
    const door = new Door("123");
    let doorOpen = door.openAndUnlocked();
    assert.equal(doorOpen.isOpen(), true);
    assert.equal(doorOpen.isUnlocked(), true);
  });
});

describe("Kata Door", () => {
  it("Create a door Open and Locked, verify is the door is open and Locked", () => {
    const door = new Door("123");
    let doorOpen = door.openAndLocked();
    assert.equal(doorOpen.isOpen(), true);
    assert.equal(doorOpen.isLocked(), true);
  });
});

describe("Kata Door", () => {
  it("Create a door Close and Locked, verify is the door is Closen and unlocked", () => {
    const door = new Door("123");
    let doorOpen = door.closedAndUnlocked();
    assert.equal(doorOpen.isClosed(), true);
    assert.equal(doorOpen.isUnlocked(), true);
  });
});

describe("Kata Door", () => {
  it("Create a door Open and Locked, verify is the door is Closen and Locked", () => {
    const door = new Door("123");
    let doorOpen = door.closedAndLocked();
    assert.equal(doorOpen.isClosed(), true);
    assert.equal(doorOpen.isLocked(), true);
  });
});

describe("Kata Door", () => {
  it("Unlock if the key is the coorect key", () => {
    const door = new Door("123");
    let doorOpen = door.openAndLocked();
    assert.equal(doorOpen.unlock(), true);
  });
});
