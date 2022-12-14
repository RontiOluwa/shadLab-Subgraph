// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CarsItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CarsItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CarsItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CarsItem", id.toString(), this);
    }
  }

  static load(id: string): CarsItem | null {
    return changetype<CarsItem | null>(store.get("CarsItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    return value!.toBigInt();
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get VIN(): BigInt {
    let value = this.get("VIN");
    return value!.toBigInt();
  }

  set VIN(value: BigInt) {
    this.set("VIN", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get color(): string {
    let value = this.get("color");
    return value!.toString();
  }

  set color(value: string) {
    this.set("color", Value.fromString(value));
  }
}

export class InspectionItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InspectionItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InspectionItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("InspectionItem", id.toString(), this);
    }
  }

  static load(id: string): InspectionItem | null {
    return changetype<InspectionItem | null>(store.get("InspectionItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _itemId(): BigInt {
    let value = this.get("_itemId");
    return value!.toBigInt();
  }

  set _itemId(value: BigInt) {
    this.set("_itemId", Value.fromBigInt(value));
  }

  get VIN(): BigInt {
    let value = this.get("VIN");
    return value!.toBigInt();
  }

  set VIN(value: BigInt) {
    this.set("VIN", Value.fromBigInt(value));
  }

  get date(): string {
    let value = this.get("date");
    return value!.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }
}
