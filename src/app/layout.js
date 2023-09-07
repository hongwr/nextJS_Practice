import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Web tutorials',
  description: 'Hong Wang yeul',
}

export default async function RootLayout({ children }) {
  const resp = await fetch('http://localhost:9999/topics');
  const topics = await resp.json();


  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update/1">Update</Link></li>
          <li><input type="button" value='delete' /></li>
        </ul>
      </body>
    </html>
  )
}
