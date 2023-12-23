import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Blacklisted,
  Bought,
  Delisted,
  Listed,
  OfferAccepted,
  OfferCancelled,
  Offered,
  OwnershipTransferred,
  TokenBlacklisted,
  TokenWhitelisted,
  UniversalOfferAccepted,
  UniversalOfferCancelled,
  UniversallyOffered,
  Whitelisted
} from "../generated/Contract/Contract"

export function createBlacklistedEvent(col: Address): Blacklisted {
  let blacklistedEvent = changetype<Blacklisted>(newMockEvent())

  blacklistedEvent.parameters = new Array()

  blacklistedEvent.parameters.push(
    new ethereum.EventParam("col", ethereum.Value.fromAddress(col))
  )

  return blacklistedEvent
}

export function createBoughtEvent(listingId: BigInt, buyer: Address): Bought {
  let boughtEvent = changetype<Bought>(newMockEvent())

  boughtEvent.parameters = new Array()

  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return boughtEvent
}

export function createDelistedEvent(listingId: BigInt): Delisted {
  let delistedEvent = changetype<Delisted>(newMockEvent())

  delistedEvent.parameters = new Array()

  delistedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )

  return delistedEvent
}

export function createListedEvent(
  listingId: BigInt,
  order: ethereum.Tuple
): Listed {
  let listedEvent = changetype<Listed>(newMockEvent())

  listedEvent.parameters = new Array()

  listedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  listedEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return listedEvent
}

export function createOfferAcceptedEvent(
  offerId: BigInt,
  seller: Address
): OfferAccepted {
  let offerAcceptedEvent = changetype<OfferAccepted>(newMockEvent())

  offerAcceptedEvent.parameters = new Array()

  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return offerAcceptedEvent
}

export function createOfferCancelledEvent(offerId: BigInt): OfferCancelled {
  let offerCancelledEvent = changetype<OfferCancelled>(newMockEvent())

  offerCancelledEvent.parameters = new Array()

  offerCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )

  return offerCancelledEvent
}

export function createOfferedEvent(
  offerId: BigInt,
  order: ethereum.Tuple
): Offered {
  let offeredEvent = changetype<Offered>(newMockEvent())

  offeredEvent.parameters = new Array()

  offeredEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offeredEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return offeredEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenBlacklistedEvent(token: Address): TokenBlacklisted {
  let tokenBlacklistedEvent = changetype<TokenBlacklisted>(newMockEvent())

  tokenBlacklistedEvent.parameters = new Array()

  tokenBlacklistedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenBlacklistedEvent
}

export function createTokenWhitelistedEvent(token: Address): TokenWhitelisted {
  let tokenWhitelistedEvent = changetype<TokenWhitelisted>(newMockEvent())

  tokenWhitelistedEvent.parameters = new Array()

  tokenWhitelistedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenWhitelistedEvent
}

export function createUniversalOfferAcceptedEvent(
  universalOfferId: BigInt,
  buyer: Address,
  tokenId: BigInt
): UniversalOfferAccepted {
  let universalOfferAcceptedEvent = changetype<UniversalOfferAccepted>(
    newMockEvent()
  )

  universalOfferAcceptedEvent.parameters = new Array()

  universalOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "universalOfferId",
      ethereum.Value.fromUnsignedBigInt(universalOfferId)
    )
  )
  universalOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  universalOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return universalOfferAcceptedEvent
}

export function createUniversalOfferCancelledEvent(
  universalOfferId: BigInt
): UniversalOfferCancelled {
  let universalOfferCancelledEvent = changetype<UniversalOfferCancelled>(
    newMockEvent()
  )

  universalOfferCancelledEvent.parameters = new Array()

  universalOfferCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "universalOfferId",
      ethereum.Value.fromUnsignedBigInt(universalOfferId)
    )
  )

  return universalOfferCancelledEvent
}

export function createUniversallyOfferedEvent(
  universalOfferId: BigInt,
  order: ethereum.Tuple
): UniversallyOffered {
  let universallyOfferedEvent = changetype<UniversallyOffered>(newMockEvent())

  universallyOfferedEvent.parameters = new Array()

  universallyOfferedEvent.parameters.push(
    new ethereum.EventParam(
      "universalOfferId",
      ethereum.Value.fromUnsignedBigInt(universalOfferId)
    )
  )
  universallyOfferedEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return universallyOfferedEvent
}

export function createWhitelistedEvent(col: Address): Whitelisted {
  let whitelistedEvent = changetype<Whitelisted>(newMockEvent())

  whitelistedEvent.parameters = new Array()

  whitelistedEvent.parameters.push(
    new ethereum.EventParam("col", ethereum.Value.fromAddress(col))
  )

  return whitelistedEvent
}
