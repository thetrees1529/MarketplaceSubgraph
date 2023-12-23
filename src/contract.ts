import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Contract,
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
import { User, Token, Collection, Nft, Offer, UniversalOffer, Listing } from "../generated/schema"

export function handleBlacklisted(event: Blacklisted): void {}

export function handleBought(event: Bought): void {
  const listing = Listing.load(event.params.listingId.toString())!
  listing.soldTo = getUser(event.params.buyer).id
  listing.save()
}

export function handleDelisted(event: Delisted): void {
  const listing = Listing.load(event.params.listingId.toString())!
  listing.delisted = true
  listing.save()
}

export function handleListed(event: Listed): void {
  const listing = new Listing(event.params.listingId.toString())
  listing.delisted = false
  listing.seller = getUser(event.params.order.user).id
  listing.token = getToken(event.params.order.token).id
  listing.nft = getNft(event.params.order.col, event.params.order.tokenId).id
  listing.price = event.params.order.amount
  listing.expiry = event.params.order.expiry
  listing.save()
}

export function handleOfferAccepted(event: OfferAccepted): void {
  const offer = Offer.load(event.params.offerId.toString())!
  offer.acceptedBy = getUser(event.params.seller).id
  offer.save()
}

export function handleOfferCancelled(event: OfferCancelled): void {
  const offer = Offer.load(event.params.offerId.toString())!
  offer.cancelled = true
  offer.save()
}

export function handleOffered(event: Offered): void {
  const offer = new Offer(event.params.offerId.toString())
  offer.cancelled = false
  offer.buyer = getUser(event.params.order.user).id
  offer.token = getToken(event.params.order.token).id
  offer.nft = getNft(event.params.order.col, event.params.order.tokenId).id
  offer.price = event.params.order.amount
  offer.expiry = event.params.order.expiry
  offer.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTokenBlacklisted(event: TokenBlacklisted): void {}

export function handleTokenWhitelisted(event: TokenWhitelisted): void { getToken(event.params.token) }

export function handleUniversalOfferAccepted(
  event: UniversalOfferAccepted
): void {
  const universalOffer = UniversalOffer.load(event.params.universalOfferId.toString())!
  universalOffer.acceptedBy = getUser(event.params.buyer).id
  universalOffer.save()
}

export function handleUniversalOfferCancelled(
  event: UniversalOfferCancelled
): void {
  const universalOffer = UniversalOffer.load(event.params.universalOfferId.toString())!
  universalOffer.cancelled = true
  universalOffer.save()
}

export function handleUniversallyOffered(event: UniversallyOffered): void {
  const universalOffer = new UniversalOffer(event.params.universalOfferId.toString())
  universalOffer.cancelled = false
  universalOffer.buyer = getUser(event.params.order.user).id
  universalOffer.collection = getCollection(event.params.order.col).id
  universalOffer.token = getToken(event.params.order.token).id
  universalOffer.price = event.params.order.amount
  universalOffer.expiry = event.params.order.expiry
  universalOffer.save()

}

export function handleWhitelisted(event: Whitelisted): void { getCollection(event.params.col) }


function getUser(address: Address): User {
  let user = User.load(address)
  if (user == null) {
    user = new User(address)
    user.save()
  }
  return user
}

function getToken(address: Address): Token {
  let token = Token.load(address)
  if (token == null) {
    token = new Token(address)
    token.save()
  }
  return token
}

function getCollection(address: Address): Collection {
  let collection = Collection.load(address)
  if (collection == null) {
    collection = new Collection(address)
    collection.save()
  }
  return collection
}

function getNft(col: Address, tokenId: BigInt): Nft {
  const id = col.toString() + "-" + tokenId.toString()
  let nft = Nft.load(id)
  if (nft == null) {
    nft = new Nft(id)
    nft.collection = getCollection(col).id
    nft.tokenId = tokenId
    nft.save()
  }
  return nft

}
