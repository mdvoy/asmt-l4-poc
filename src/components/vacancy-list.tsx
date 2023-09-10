import { type FC } from 'react'
import type { Vacancy } from '../model'
import { VacancyCard } from './vacancy-card'

type PropTypes = {
    vacancies: Vacancy[]
}

export const VacancyList: FC<PropTypes> = ({ vacancies }) => {
    return (
        <>
            {vacancies.map((vacancy) => (
                <VacancyCard key={vacancy.id} {...vacancy} />
            ))}
        </>
    )
}
