import { type FC } from 'react'
import { Layout } from '../components/layout'
import { Filter } from '../components/filter'
import { Content } from '../components/content'
import { VacancyList } from '../components/vacancy-list'

const vacancies = [
    {
        id: '1',
        title: 'Vacancy 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nisl nisl ultricies nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies aliquam, nisl nisl ultricies nisl, eget ultricies nisl nisl eget nisl.',
    },
]

export const HomePage: FC = () => {
    return (
        <Layout
            filter={<Filter />}
            content={
                <Content>
                    <VacancyList items={vacancies} />
                </Content>
            }
        />
    )
}
