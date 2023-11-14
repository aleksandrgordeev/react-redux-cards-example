import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setName } from "./cardsSlice"
import { useSelector } from "react-redux"
import { Card } from "./Card"

export function Cards() {
  const cards = useSelector((state) => state.cards)
  const cardIds = Object.keys(cards)
  return cardIds.map((id) => <Card key={id} cardId={id} />)
}
