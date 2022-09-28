import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { CarsItem } from "../generated/schema"
import { CarsItem as CarsItemEvent } from "../generated/Cars/Cars"
import { handleCarsItem } from "../src/cars"
import { createCarsItemEvent } from "./cars-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let itemId = BigInt.fromI32(234)
    let VIN = BigInt.fromI32(234)
    let name = "Example string value"
    let color = "Example string value"
    let newCarsItemEvent = createCarsItemEvent(itemId, VIN, name, color)
    handleCarsItem(newCarsItemEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CarsItem created and stored", () => {
    assert.entityCount("CarsItem", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CarsItem",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "itemId",
      "234"
    )
    assert.fieldEquals(
      "CarsItem",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "VIN",
      "234"
    )
    assert.fieldEquals(
      "CarsItem",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CarsItem",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "color",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
