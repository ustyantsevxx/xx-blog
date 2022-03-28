import axios from 'axios'
import dayjs from 'dayjs'
import { NextPage } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { useQuery } from 'react-query'
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import ruStrings from 'react-timeago/lib/language-strings/ru'

const formatter = buildFormatter(ruStrings)

import facePicture from '../assets/images/face.jpg'

const IndexPage: NextPage = () => {
  const { data: articles } = useQuery('articles', async () => {
    const { data } = await axios.get('http://localhost:1337/api/articles', {
      params: { sort: 'createdAt:desc' }
    })

    return data.data
  })

  return (
    <div className="mx-auto max-w-3xl pt-10 pb-16">
      <div className="flex w-full items-center justify-between border-b border-gray-200 pb-8">
        <div className="h-64 w-64 overflow-hidden rounded-full">
          <Image src={facePicture} alt="My face" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Блог Тимофея Устьянцева</h1>
        </div>
      </div>

      <div className="mt-8 space-y-20">
        {articles?.map(art => (
          <article key={art.id}>
            <h2 className="text-2xl font-bold">{art.attributes.title}</h2>
            <div className="mt-2">
              <ReactMarkdown>{art.attributes.content}</ReactMarkdown>
            </div>

            <time className="mt-1 block text-xs text-gray-400">
              <TimeAgo
                formatter={formatter}
                title={dayjs(art.attributes.createdAt).format(
                  'DD.MM.YYYY HH:mm'
                )}
                date={art.attributes.createdAt}
              />
            </time>
          </article>
        ))}
      </div>
    </div>
  )
}

export default IndexPage
