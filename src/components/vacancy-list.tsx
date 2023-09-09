import { type FC } from 'react'
import type { Vacancy } from '../model'
import { VacancyCard } from './vacancy-card'

type PropTypes = {
    items: Vacancy[]
}

export const VacancyList: FC<PropTypes> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <VacancyCard key={item.id} {...item} />
            ))}
        </>
    )
}
