import { fetchAPI } from '@/actions/wordpress'

export default async function BlogPost({ params }:{params:any}) {
  const data = await fetchAPI(`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `, {
    variables: { slug: params.slug }
  })

  const post = data.post

  return (
    <main className="w-screen min-h-[98vh] pt-16 pb-16 flex flex-row justify-center items-start bg-gradient-to-br from-slate to-black">
      <article className="pt-36 md:pt-48 px-[10%] md:px-[30%] w-full">
        <h1 className="text-4xl sm:text-6xl mb-4 font-semibold text-white sm:leading-[5rem]">{post.title}</h1>
        <div className="text-offWhite mb-16">
          By Dean Divizio
        </div>
        <div 
          className="prose lg:prose-xl prose-neutral prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}

export const revalidate = 60 * 60 * 24 * 30
// export const revalidate = 1