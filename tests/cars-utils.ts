import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { CarsItem, InspectionItem } from "../generated/Cars/Cars"

export function createCarsItemEvent(
  itemId: BigInt,
  VIN: BigInt,
  name: string,
  color: string
): CarsItem {
  let carsItemEvent = changetype<CarsItem>(newMockEvent())

  carsItemEvent.parameters = new Array()

  carsItemEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  carsItemEvent.parameters.push(
    new ethereum.EventParam("VIN", ethereum.Value.fromUnsignedBigInt(VIN))
  )
  carsItemEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  carsItemEvent.parameters.push(
    new ethereum.EventParam("color", ethereum.Value.fromString(color))
  )

  return carsItemEvent
}

export function createInspectionItemEvent(
  _itemId: BigInt,
  VIN: BigInt,
  date: string
): InspectionItem {
  let inspectionItemEvent = changetype<InspectionItem>(newMockEvent())

  inspectionItemEvent.parameters = new Array()

  inspectionItemEvent.parameters.push(
    new ethereum.EventParam(
      "_itemId",
      ethereum.Value.fromUnsignedBigInt(_itemId)
    )
  )
  inspectionItemEvent.parameters.push(
    new ethereum.EventParam("VIN", ethereum.Value.fromUnsignedBigInt(VIN))
  )
  inspectionItemEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )

  return inspectionItemEvent
}
