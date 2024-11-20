import { fetchAPI } from '@/actions/wordpress'
import Link from 'next/link'

export default async function BlogLandingPage() {
    const data = await fetchAPI(`
        query HomeQuery {
          posts(first: 10) {
            edges {
              node {
                title
                excerpt
                slug
              }
            }
          }
        }
      `)
    return (
        <main>
            <div className="w-screen min-h-[98vh] flex flex-row justify-center items-start bg-gradient-to-br from-slate to-black" >
                <div className="h-full backdrop-blur-sm  flex flex-col">
                    <div className="pt-36 md:pt-64 pb-24 md:pb-48 px-8 backdrop-blur-lg text-center flex flex-col justify-center">
                        <h1 className="text-6xl sm:text-8xl mb-6 font-semibold empTextDiv w-full py-2"><span className="empText text-center">{`Blog`}</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-8 md:gap-12 px-4">
                        {data.posts.edges.map(({ node }:{node:any}) => (
                            <Link href={`/blog/${node.slug}`} key={node.slug}>
                                <article className="p-8 max-w-xl hover:scale-[102%] transition-all duration-300 bg-gradient-to-br from-slate to-slate-dark border-black rounded-lg">
                                    <h2 className="text-2xl font-medium text-white mb-4">{node.title}</h2>
                                    <div className="text-offWhite font-light md:font-normal" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export const revalidate = 60 * 60
// export const revalidate = 1