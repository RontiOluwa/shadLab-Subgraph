import {
  CarsItem as CarsItemEvent,
  InspectionItem as InspectionItemEvent
} from "../generated/Cars/Cars"
import { CarsItem, InspectionItem } from "../generated/schema"

export function handleCarsItem(event: CarsItemEvent): void {
  let entity = new CarsItem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.itemId = event.params.itemId
  entity.VIN = event.params.VIN
  entity.name = event.params.name
  entity.color = event.params.color
  entity.save()
}

export function handleInspectionItem(event: InspectionItemEvent): void {
  let entity = new InspectionItem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._itemId = event.params._itemId
  entity.VIN = event.params.VIN
  entity.date = event.params.date
  entity.save()
}
