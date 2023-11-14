import { useSelector } from "react-redux"
import { faker } from "@faker-js/faker"
import { setName } from "./cardsSlice"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

const getRandomName = () => faker.lorem.word()

export function Card({ cardId }) {
  const card = useSelector((state) => state.cards[cardId])
  const dispatch = useAppDispatch()
  return (
    <div style={{ border: "2px solid black", width: "100%", margin: "20px" }}>
      {card.name}
      <button
        onClick={() => dispatch(setName({ id: cardId, name: getRandomName() }))}
      >
        Set random name
      </button>
    </div>
  )
}
