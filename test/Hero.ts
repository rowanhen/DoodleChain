import "@nomiclabs/hardhat-ethers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Hero", () => {
  const createHero = async () => {
    const Hero = await ethers.getContractFactory("TestHero");
    const hero = await Hero.deploy();
    await hero.deployed();

    return hero;
  };

  let hero: Contract;

  before(async () => {
    hero = await createHero();
  });

  it("should get a 0 hero array", async () => {
    expect(await hero.getHeroes()).to.deep.equal([]);
  });

  it("should fail at creating a hero, due to no payment", async () => {
    let e;

    try {
      await hero.createHero(0, {
        value: ethers.utils.parseEther("0.0499999"),
      });
    } catch (error) {
      e = error;
    }

    expect(
      e.message.includes("Please send more money we need 0.05eth")
    ).to.equal(true);
  });

  it("should create a hero", async () => {
    const hero = await createHero();

    await hero.setRandom(69);
    await hero.createHero(0, {
      value: ethers.utils.parseEther("0.05"),
    });

    const h = (await hero.getHeroes())[0];

    //[s, h, d, i, m]
    //[s, h, d, i]
    //[s, i, d]
    expect(await hero.getMagic(h)).to.equal(16);
    expect(await hero.getHealth(h)).to.equal(2);
  });
});
